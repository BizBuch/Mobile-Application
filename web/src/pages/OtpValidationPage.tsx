import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import { useVerifyOtp } from '@application/command/useVerifyOtp';
import './Auth.css';

const OTP_LENGTH = 6;

const OtpValidationPage: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as any)?.email || '';
  const verifyOtp = useVerifyOtp();

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    const next = [...otp];
    next[index] = value;
    setOtp(next);

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH);
    if (!pasted) return;
    const next = [...otp];
    pasted.split('').forEach((char, i) => {
      next[i] = char;
    });
    setOtp(next);
    const focusIndex = Math.min(pasted.length, OTP_LENGTH - 1);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join('');
    if (code.length < OTP_LENGTH) return;

    verifyOtp.mutate(
      { email, otp: code },
      {
        onSuccess: () => {
          navigate('/login');
        },
      },
    );
  };

  return (
    <div className="auth-page">
      <div className="auth-bg-orb auth-bg-orb-1" />
      <div className="auth-bg-orb auth-bg-orb-2" />
      <div className="auth-bg-orb auth-bg-orb-3" />

      <Card className="auth-card" sx={{ background: 'rgba(18, 18, 20, 0.75)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(40px)' }}>
        <Box className="auth-logo">
          <img src="/logo.svg" alt="BizBuch" width={36} height={35} />
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#fff' }}>BizBuch</Typography>
        </Box>

        <Typography className="auth-title" variant="h4" align="center" sx={{ mb: 0.25, fontWeight: 700, background: 'linear-gradient(135deg, #fff 0%, #e4e4e7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Verify Email
        </Typography>
        <Typography className="auth-subtitle" align="center" sx={{ color: '#a1a1aa', mb: 3 }}>
          {email ? `Enter the OTP sent to ${email}` : 'Enter the OTP sent to your email'}
        </Typography>

        {verifyOtp.isError && (
          <Alert severity="error" sx={{ mb: 1, bgcolor: 'rgba(239,68,68,0.08)', color: '#f87171', border: '1px solid rgba(239,68,68,0.25)' }}>
            {verifyOtp.error?.message || 'Invalid OTP. Please try again.'}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', my: 1 }}>
            {otp.map((digit, i) => (
              <TextField
                key={i}
                value={digit}
                onChange={(e) => handleChange(e.target.value, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onPaste={i === 0 ? handlePaste : undefined}
                variant="outlined"
                slotProps={{
                  input: {
                    ref: (el: HTMLInputElement | null) => { inputRefs.current[i] = el; },
                  },
                  htmlInput: {
                    inputMode: 'numeric' as any,
                    maxLength: 1,
                    style: { textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, padding: '8px 0', width: '48px' },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: 'rgba(255,255,255,0.04)',
                    borderRadius: '12px',
                    color: '#fff',
                    '& fieldset': { borderColor: 'rgba(255,255,255,0.12)' },
                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                    '&.Mui-focused fieldset': { borderColor: '#f29520' },
                  },
                }}
              />
            ))}
          </Box>

          <Button
            type="submit"
            fullWidth
            disabled={verifyOtp.isPending || otp.join('').length < OTP_LENGTH}
            sx={{
              mt: 0.5,
              py: 1.75,
              fontSize: '1rem',
              fontWeight: 700,
              color: '#0a0a0c',
              background: 'linear-gradient(135deg, #f29520, #ffaa40)',
              borderRadius: '12px',
              '&:hover': { background: 'linear-gradient(135deg, #ffaa40, #f29520)', boxShadow: '0 0 24px rgba(242,149,32,0.35)' },
              '&:disabled': { opacity: 0.5 },
            }}
          >
            {verifyOtp.isPending ? 'Verifying...' : 'Verify'}
          </Button>
        </Box>

        <Typography align="center" sx={{ mt: 2.75, color: '#71717a', fontSize: '0.9rem' }}>
          Didn't receive the code? <a href="#" style={{ color: '#f29520', fontWeight: 600 }}>Resend</a>
        </Typography>
      </Card>
    </div>
  );
};

export default OtpValidationPage;
