import { theme } from '../../theme';

interface AvatarProps {
  uri?: string;
  initials?: string;
  size?: number;
  style?: React.CSSProperties;
}

export const Avatar: React.FC<AvatarProps> = ({
  uri,
  initials = '?',
  size = 42,
  style,
}) => {
  if (uri) {
    return (
      <img
        src={uri}
        alt={initials}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          objectFit: 'cover',
          ...style,
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: theme.colors.primaryDark,
        color: theme.colors.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.4,
        fontWeight: 600,
        ...style,
      }}
    >
      {initials.charAt(0).toUpperCase()}
    </div>
  );
};