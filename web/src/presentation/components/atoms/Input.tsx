import { theme } from '../../theme';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, style, ...props }) => {
  return (
    <div style={styles.container}>
      {label && <label style={styles.label}>{label}</label>}
      <input
        {...props}
        style={{
          ...styles.input,
          ...(error ? styles.inputError : {}),
          ...style,
        }}
      />
      {error && <span style={styles.errorText}>{error}</span>}
    </div>
  );
};

const styles = {
  container: {
    marginBottom: theme.spacing.md,
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 600 as const,
    color: theme.colors.gray700,
    marginBottom: theme.spacing.sm,
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '15px',
    border: `1px solid ${theme.colors.gray300}`,
    borderRadius: theme.borderRadius.sm,
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  inputError: {
    borderColor: theme.colors.red500,
  },
  errorText: {
    display: 'block',
    fontSize: '12px',
    color: theme.colors.red500,
    marginTop: theme.spacing.xs,
  },
};