import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/templates/AppLayout';
import ProtectedRoute from './components/ProtectedRoute';
import {
  LoginPage,
  RegisterPage,
  OtpValidationPage,
  WelcomePage,
  NewsFeedPage,
  NetworkPage,
  ViewProfilePage,
  EditProfilePage,
  NotificationsPage,
  MessagesPage,
  ChatPage,
  CreatePostPage,
  ViewPostPage,
  ActivityLogPage,
  AddEducationPage,
  AddWorkExperiencePage,
  AdvancedSettingsPage,
} from './navigation/routes';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/verify-otp" element={<OtpValidationPage />} />

      {/* Protected app routes */}
      <Route path="/" element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
        <Route index element={<Navigate to="/feed" replace />} />
        <Route path="feed" element={<NewsFeedPage />} />
        <Route path="network" element={<NetworkPage />} />
        <Route path="create-post" element={<CreatePostPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="messages/:userId" element={<ChatPage />} />
        <Route path="post/:postId" element={<ViewPostPage />} />
        <Route path="profile" element={<ViewProfilePage />} />
        <Route path="profile/:userId" element={<ViewProfilePage />} />
        <Route path="edit-profile" element={<EditProfilePage />} />
        <Route path="add-education" element={<AddEducationPage />} />
        <Route path="add-work-experience" element={<AddWorkExperiencePage />} />
        <Route path="activity-log" element={<ActivityLogPage />} />
        <Route path="settings" element={<AdvancedSettingsPage />} />
      </Route>

      {/* Default route */}
      <Route path="*" element={<Navigate to="/welcome" replace />} />
    </Routes>
  );
};

export default App;