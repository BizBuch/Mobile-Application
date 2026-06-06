import { theme } from '../../theme';
import { Loader } from '../atoms';

interface CenteredLoaderProps {
  message?: string;
}

export const CenteredLoader: React.FC<CenteredLoaderProps> = ({ message }) => {
  return (
    <div style={styles.container}>
      <Loader size={40} />
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

interface CenteredErrorProps {
  message?: string;
  onRetry?: () => void;
}

export const CenteredError: React.FC<CenteredErrorProps> = ({
  message = 'Something went wrong',
  onRetry,
}) => {
  return (
    <div style={styles.container}>
      <p style={styles.errorMessage}>{message}</p>
      {onRetry && (
        <button onClick={onRetry} style={styles.retryButton}>
          Retry
        </button>
      )}
    </div>
  );
};

interface EmptyStateProps {
  message: string;
  subMessage?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ message, subMessage }) => {
  return (
    <div style={styles.container}>
      <p style={styles.emptyMessage}>{message}</p>
      {subMessage && <p style={styles.emptySubMessage}>{subMessage}</p>}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 16px',
    flex: 1,
  },
  message: {
    marginTop: theme.spacing.md,
    fontSize: '14px',
    color: theme.colors.gray500,
  },
  errorMessage: {
    fontSize: '16px',
    color: theme.colors.gray700,
    marginBottom: theme.spacing.md,
  },
  retryButton: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    border: 'none',
    borderRadius: theme.borderRadius.sm,
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  emptyMessage: {
    fontSize: '18px',
    fontWeight: 500,
    color: theme.colors.gray700,
  },
  emptySubMessage: {
    fontSize: '14px',
    color: theme.colors.gray500,
    marginTop: theme.spacing.xs,
  },
};