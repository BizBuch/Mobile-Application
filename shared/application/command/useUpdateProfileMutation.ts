import { useMutation, useQueryClient } from "@tanstack/react-query";
import { profileRepository } from '../../di';
import { UpdateProfileData } from "../../domain/user/repositories/IProfileRepository";
import { MediaApi } from "../../infrastructure/services/MediaApi";
import { IFileUploadService } from '../../services/interfaces/IFileUploadService';

// Default upload service - platform-specific implementations should be injected
let _fileUploadService: IFileUploadService | null = null;

export const setFileUploadService = (service: IFileUploadService) => {
  _fileUploadService = service;
};

export const useUpdateProfileMutation = () => {
  const queryClient = useQueryClient();
  const mediaApi = new MediaApi();

  return useMutation({
    mutationFn: async (input: UpdateProfileData & { avatarUri?: string; coverImageUri?: string }) => {
      if (!_fileUploadService) {
        throw new Error('FileUploadService not configured. Call setFileUploadService() first.');
      }

      const updateData: UpdateProfileData = { ...input };

      // Upload avatar if provided
      if (input.avatarUri) {
        const { uploadUrl, publicUrl } = await mediaApi.getPresignedUrl();
        await _fileUploadService.uploadToPresignedUrl(uploadUrl, input.avatarUri);
        updateData.avatar = publicUrl;
      }

      // Upload cover image if provided
      if (input.coverImageUri) {
        const { uploadUrl, publicUrl } = await mediaApi.getPresignedUrl();
        await _fileUploadService.uploadToPresignedUrl(uploadUrl, input.coverImageUri);
        updateData.cover_image = publicUrl;
      }

      // Remove local URIs before sending to API
      delete (updateData as any).avatarUri;
      delete (updateData as any).coverImageUri;

      return profileRepository.updateProfile(updateData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUserProfile"] });
    },
  });
};
