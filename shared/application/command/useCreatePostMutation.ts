import { useMutation } from '@tanstack/react-query';
import { MediaApi } from '../../infrastructure/services/MediaApi';
import { PostRequestBody } from '../../domain/post/entities/Post';
import { IFileUploadService } from '../../services/interfaces/IFileUploadService';

import { postRepository } from '../../di';

// Default upload service - platform-specific implementations should be injected
let _fileUploadService: IFileUploadService | null = null;

export const setFileUploadService = (service: IFileUploadService) => {
  _fileUploadService = service;
};

export const useCreatePostMutation = () => {
  const mediaApi = new MediaApi();

  return useMutation({
    mutationFn: async (input: PostRequestBody) => {

      if (input.imageUrl) {
        if (!_fileUploadService) {
          throw new Error('FileUploadService not configured. Call setFileUploadService() first.');
        }
        const { uploadUrl, publicUrl } = await mediaApi.getPresignedUrl();
        await _fileUploadService.uploadToPresignedUrl(uploadUrl, input.imageUrl);
        input.imageUrl = publicUrl;
      }

      await postRepository.create(input);
    },
  });
};
