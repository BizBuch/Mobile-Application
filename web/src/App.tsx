import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './presentation/components/templates/AppLayout';
import {
  LoginScreen,
  RegisterScreen,
  OtpValidationScreen,
  WelcomeScreen,
  NewsFeedScreen,
  NetworkScreen,
  ViewProfileScreen,
  EditProfileScreen,
  NotificationsScreen,
  MessagesScreen,
  ChatScreen,
  CreatePostScreen,
  ViewPostScreen,
  ActivityLogScreen,
  AddEducationScreen,
  AddWorkExperienceScreen,
  AdvancedSettingsScreen,
} from './presentation/navigation/routes';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/welcome" element={<WelcomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/verify-otp" element={<OtpValidationScreen />} />

      {/* Main app routes */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate to="/feed" replace />} />
        <Route path="feed" element={<NewsFeedScreen />} />
        <Route path="network" element={<NetworkScreen />} />
        <Route path="create-post" element={<CreatePostScreen />} />
        <Route path="notifications" element={<NotificationsScreen />} />
        <Route path="messages" element={<MessagesScreen />} />
        <Route path="messages/:userId" element={<ChatScreen />} />
        <Route path="post/:postId" element={<ViewPostScreen />} />
        <Route path="profile" element={<ViewProfileScreen />} />
        <Route path="profile/:userId" element={<ViewProfileScreen />} />
        <Route path="edit-profile" element={<EditProfileScreen />} />
        <Route path="add-education" element={<AddEducationScreen />} />
        <Route path="add-work-experience" element={<AddWorkExperienceScreen />} />
        <Route path="activity-log" element={<ActivityLogScreen />} />
        <Route path="settings" element={<AdvancedSettingsScreen />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/feed" replace />} />
    </Routes>
  );
};

export default App;