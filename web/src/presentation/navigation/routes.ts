import { lazy } from 'react';

// Lazy-loaded screen components for code splitting
export const WelcomeScreen = lazy(() => import('../screens/WelcomeScreen'));
export const LoginScreen = lazy(() => import('../screens/LoginScreen'));
export const RegisterScreen = lazy(() => import('../screens/RegisterScreen'));
export const OtpValidationScreen = lazy(() => import('../screens/OtpValidationScreen'));
export const NewsFeedScreen = lazy(() => import('../screens/NewsFeedScreen'));
export const NetworkScreen = lazy(() => import('../screens/NetworkScreen'));
export const ViewProfileScreen = lazy(() => import('../screens/ViewProfileScreen'));
export const EditProfileScreen = lazy(() => import('../screens/EditProfileScreen'));
export const NotificationsScreen = lazy(() => import('../screens/NotificationsScreen'));
export const MessagesScreen = lazy(() => import('../screens/MessagesScreen'));
export const ChatScreen = lazy(() => import('../screens/ChatScreen'));
export const CreatePostScreen = lazy(() => import('../screens/CreatePostScreen'));
export const ViewPostScreen = lazy(() => import('../screens/ViewPostScreen'));
export const ActivityLogScreen = lazy(() => import('../screens/ActivityLogScreen'));
export const AddEducationScreen = lazy(() => import('../screens/AddEducationScreen'));
export const AddWorkExperienceScreen = lazy(() => import('../screens/AddWorkExperienceScreen'));
export const AdvancedSettingsScreen = lazy(() => import('../screens/AdvancedSettingsScreen'));