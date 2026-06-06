import { IFileUploadService } from '../../../shared/services/interfaces/IFileUploadService';
import { setFileUploadService as setCreatePostUploadService } from '../../../shared/application/command/useCreatePostMutation';
import { setFileUploadService as setUpdateProfileUploadService } from '../../../shared/application/command/useUpdateProfileMutation';
import ReactNativeBlobUtil from 'react-native-blob-util';

/**
 * React Native file upload service using react-native-blob-util
 */
class RnFileUploadService implements IFileUploadService {
  async uploadToPresignedUrl(presignedUrl: string, imageUri: string): Promise<boolean> {
    try {
      const filePath = imageUri.replace('file://', '');

      const response = await ReactNativeBlobUtil.fetch(
        'PUT',
        presignedUrl,
        {
          'Content-Type': 'image/jpeg',
        },
        ReactNativeBlobUtil.wrap(filePath),
      );
      return response.info().status === 200;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  }
}

// Register the platform-specific upload service with shared mutations
const rnFileUploadService = new RnFileUploadService();
setCreatePostUploadService(rnFileUploadService);
setUpdateProfileUploadService(rnFileUploadService);