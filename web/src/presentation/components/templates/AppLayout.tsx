import { NavLink, Outlet } from 'react-router-dom';
import { theme } from '../../theme';

const navItems = [
  { path: '/feed', label: 'Home' },
  { path: '/network', label: 'Connect' },
  { path: '/create-post', label: 'Add New' },
  { path: '/notifications', label: 'Notifications' },
  { path: '/messages', label: 'Messages' },
];

export const AppLayout: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main style={{ flex: 1, paddingBottom: '60px' }}>
        <Outlet />
      </main>
      <nav style={styles.navBar}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              ...styles.navItem,
              ...(isActive ? styles.navItemActive : {}),
            })}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed' as const,
    bottom: 0,
    left: 0,
    right: 0,
    height: '56px',
    backgroundColor: theme.colors.white,
    borderTop: `1px solid ${theme.colors.border}`,
    zIndex: 1000,
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 12px',
    fontSize: '11px',
    fontWeight: '500' as const,
    color: theme.colors.gray500,
    textDecoration: 'none',
  },
  navItemActive: {
    color: theme.colors.primary,
  },
};