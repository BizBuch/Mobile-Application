import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

interface CenteredLoaderProps {
  message?: string;
}

export const CenteredLoader: React.FC<CenteredLoaderProps> = ({ message }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: '40px 16px', flex: 1 }}>
      <CircularProgress size={40} color="primary" />
      {message && (
        <Typography variant="body2" sx={{ mt: 1.5, color: 'text.disabled' }}>
          {message}
        </Typography>
      )}
    </Box>
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
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: '40px 16px', flex: 1 }}>
      <Typography variant="body1" sx={{ mb: 1.5, color: 'text.secondary' }}>
        {message}
      </Typography>
      {onRetry && (
        <Button variant="contained" color="primary" onClick={onRetry}>
          Retry
        </Button>
      )}
    </Box>
  );
};

interface EmptyStateProps {
  message: string;
  subMessage?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ message, subMessage }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: '40px 16px', flex: 1 }}>
      <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 500 }}>
        {message}
      </Typography>
      {subMessage && (
        <Typography variant="caption" sx={{ mt: 0.5, color: 'text.disabled' }}>
          {subMessage}
        </Typography>
      )}
    </Box>
  );
};