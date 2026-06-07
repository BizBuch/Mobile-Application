import { lazy } from 'react';

// Lazy-loaded page components for code splitting
export const WelcomePage = lazy(() => import('../pages/WelcomePage'));
export const LoginPage = lazy(() => import('../pages/LoginPage'));
export const RegisterPage = lazy(() => import('../pages/RegisterPage'));
export const OtpValidationPage = lazy(() => import('../pages/OtpValidationPage'));
export const NewsFeedPage = lazy(() => import('../pages/NewsFeedPage'));
export const NetworkPage = lazy(() => import('../pages/NetworkPage'));
export const ViewProfilePage = lazy(() => import('../pages/ViewProfilePage'));
export const EditProfilePage = lazy(() => import('../pages/EditProfilePage'));
export const NotificationsPage = lazy(() => import('../pages/NotificationsPage'));
export const MessagesPage = lazy(() => import('../pages/MessagesPage'));
export const ChatPage = lazy(() => import('../pages/ChatPage'));
export const CreatePostPage = lazy(() => import('../pages/CreatePostPage'));
export const ViewPostPage = lazy(() => import('../pages/ViewPostPage'));
export const ActivityLogPage = lazy(() => import('../pages/ActivityLogPage'));
export const AddEducationPage = lazy(() => import('../pages/AddEducationPage'));
export const AddWorkExperiencePage = lazy(() => import('../pages/AddWorkExperiencePage'));
export const AdvancedSettingsPage = lazy(() => import('../pages/AdvancedSettingsPage'));