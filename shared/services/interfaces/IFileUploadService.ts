/**
 * IFileUploadService Interface
 * SOLID: Dependency Inversion - Abstract interface for file uploads
 * Allows different implementations for React Native (react-native-blob-util)
 * and React Web (fetch + Blob)
 */
export interface IFileUploadService {
  uploadToPresignedUrl(presignedUrl: string, fileUri: string): Promise<boolean>;
}