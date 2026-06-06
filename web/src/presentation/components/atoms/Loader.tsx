import { theme } from '../../theme';

interface LoaderProps {
  size?: number;
  color?: string;
}

export const Loader: React.FC<LoaderProps> = ({ size = 40, color = theme.colors.primary }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <div
        style={{
          width: size,
          height: size,
          border: `3px solid ${theme.colors.gray200}`,
          borderTopColor: color,
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};