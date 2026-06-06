import { theme } from '../../theme';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'error';
  style?: React.CSSProperties;
}

export const Text: React.FC<TextProps> = ({ children, variant = 'body', style }) => {
  const variantStyles: Record<string, React.CSSProperties> = {
    h1: { fontSize: '24px', fontWeight: 700, color: theme.colors.gray900 },
    h2: { fontSize: '20px', fontWeight: 600, color: theme.colors.gray800 },
    h3: { fontSize: '18px', fontWeight: 600, color: theme.colors.gray800 },
    body: { fontSize: '15px', color: theme.colors.gray700, lineHeight: 1.5 },
    caption: { fontSize: '13px', color: theme.colors.gray500 },
    error: { fontSize: '14px', color: theme.colors.red500 },
  };

  return (
    <span style={{ ...variantStyles[variant], ...style }}>
      {children}
    </span>
  );
};