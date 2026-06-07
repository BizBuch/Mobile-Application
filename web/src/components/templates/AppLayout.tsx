import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';

const navItems = [
  { path: '/feed', label: 'Home', icon: <HomeIcon /> },
  { path: '/network', label: 'Connect', icon: <PeopleIcon /> },
  { path: '/create-post', label: 'Add New', icon: <AddCircleIcon /> },
  { path: '/notifications', label: 'Alerts', icon: <NotificationsIcon /> },
  { path: '/messages', label: 'Messages', icon: <MessageIcon /> },
];

export const AppLayout: React.FC = () => {
  const location = useLocation();
  const currentNav = navItems.findIndex((item) => item.path === location.pathname);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box component="main" sx={{ flex: 1, pb: '70px' }}>
        <Outlet />
      </Box>
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }}>
        <BottomNavigation value={currentNav >= 0 ? currentNav : false} showLabels>
          {navItems.map((item) => (
            <BottomNavigationAction
              key={item.path}
              label={item.label}
              icon={item.icon}
              component={NavLink}
              to={item.path}
              sx={{
                minWidth: 'auto',
                '&.Mui-selected': { color: 'primary.main' },
                color: 'text.disabled',
              }}
            />
          ))}
        </BottomNavigation>
      </Box>
    </Box>
  );
};