// TODO: Implement OtpValidationScreen for web
import { Button, Input } from '../components';
import { theme } from '../theme';

const OtpValidationScreen: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '16px', backgroundColor: theme.colors.background }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '32px', backgroundColor: theme.colors.white, borderRadius: theme.borderRadius.lg, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, color: theme.colors.gray900, marginBottom: '4px' }}>Verify Email</h1>
        <p style={{ fontSize: '14px', color: theme.colors.gray500, marginBottom: '24px' }}>Enter the OTP sent to your email</p>
        <Input label="OTP" placeholder="Enter verification code" />
        <Button fullWidth>Verify</Button>
      </div>
    </div>
  );
};

export default OtpValidationScreen;
