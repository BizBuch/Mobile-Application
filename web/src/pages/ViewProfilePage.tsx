import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// TODO: Implement ViewProfilePage for web
const ViewProfilePage: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h2">ViewProfilePage</Typography>
        <Typography variant="body1" color="text.disabled" sx={{ mt: 1 }}>
          This screen is not yet implemented for web.
        </Typography>
      </Box>
    </Box>
  );
};

export default ViewProfilePage;
