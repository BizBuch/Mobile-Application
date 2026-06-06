import { theme } from '../../theme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  children,
  style,
  ...props
}) => {
  const variantStyle = theme.buttonVariants[variant];

  return (
    <button
      {...props}
      style={{
        backgroundColor: variantStyle.backgroundColor,
        color: variantStyle.textColor,
        border: variantStyle.borderWidth
          ? `${variantStyle.borderWidth}px solid ${variantStyle.borderColor}`
          : 'none',
        borderRadius: theme.borderRadius.sm,
        padding: `${theme.spacing.sm}px ${theme.spacing.lg}px`,
        fontSize: '14px',
        fontWeight: 600,
        cursor: props.disabled ? 'not-allowed' : 'pointer',
        opacity: props.disabled ? 0.6 : 1,
        width: fullWidth ? '100%' : 'auto',
        ...style,
      }}
    >
      {children}
    </button>
  );
};