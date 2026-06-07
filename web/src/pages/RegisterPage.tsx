import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useRegister } from '@application/command/useRegister';
import { useRegisterForm } from '@forms/useRegisterForm';
import './Auth.css';

const RegisterPage: React.FC = () => {
  const { register: registerField, handleSubmit, rules, formState: { errors } } = useRegisterForm();
  const { mutate: registerUser, isPending, error } = useRegister();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data: any) => {
    registerUser(data, {
      onSuccess: () => {
        navigate('/verify-otp', { state: { email: data.email } });
      },
    });
  };

  const inputSx = {
    pl: 0.5,
    color: '#fff',
    bgcolor: 'rgba(255,255,255,0.04)',
    borderRadius: '12px',
    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
    '&.Mui-focused fieldset': { borderColor: '#f29520' },
  };

  const labelSlotProps = { sx: { color: '#a1a1aa', '&.Mui-focused': { color: '#f29520' } } };

  return (
    <div className="auth-page">
      <div className="auth-bg-orb auth-bg-orb-1" />
      <div className="auth-bg-orb auth-bg-orb-2" />
      <div className="auth-bg-orb auth-bg-orb-3" />

      <Card className="auth-card auth-card-register" sx={{ background: 'rgba(18, 18, 20, 0.75)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(40px)' }}>
        <Box className="auth-logo">
          <img src="/logo.svg" alt="BizBuch" width={40} height={39} />
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#fff' }}>BizBuch</Typography>
        </Box>

        <Typography className="auth-title" variant="h4" align="center" sx={{ mb: 0.25, fontWeight: 700, background: 'linear-gradient(135deg, #fff 0%, #e4e4e7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Create Account
        </Typography>
        <Typography className="auth-subtitle" align="center" sx={{ color: '#a1a1aa', mb: 3 }}>
          Join BizBuch and build your community
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 1, bgcolor: 'rgba(239,68,68,0.08)', color: '#f87171', border: '1px solid rgba(239,68,68,0.25)' }}>
            {error.message || 'Registration failed. Please try again.'}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <TextField
              label="First Name"
              placeholder="John"
              error={!!errors.first_name}
              helperText={errors.first_name?.message}
              slotProps={{ input: { startAdornment: <InputAdornment position="start"><PersonIcon sx={{ color: '#52525b', fontSize: '0.85rem' }} /></InputAdornment>, sx: inputSx }, inputLabel: labelSlotProps }}
              {...registerField('first_name', rules.first_name)}
            />
            <TextField
              label="Last Name"
              placeholder="Doe"
              error={!!errors.last_name}
              helperText={errors.last_name?.message}
              slotProps={{ input: { startAdornment: <InputAdornment position="start"><PersonIcon sx={{ color: '#52525b', fontSize: '0.85rem' }} /></InputAdornment>, sx: inputSx }, inputLabel: labelSlotProps }}
              {...registerField('last_name', rules.last_name)}
            />
          </Box>

          <TextField
            label="Email"
            placeholder="john@example.com"
            error={!!errors.email}
            helperText={errors.email?.message}
            slotProps={{ input: { startAdornment: <InputAdornment position="start"><EmailIcon sx={{ color: '#52525b', fontSize: '0.85rem' }} /></InputAdornment>, sx: inputSx }, inputLabel: labelSlotProps }}
            {...registerField('email', rules.email)}
          />

          <TextField
            label="Username"
            placeholder="johndoe"
            error={!!errors.username}
            helperText={errors.username?.message}
            slotProps={{ input: { startAdornment: <InputAdornment position="start"><BadgeIcon sx={{ color: '#52525b', fontSize: '0.85rem' }} /></InputAdornment>, sx: inputSx }, inputLabel: labelSlotProps }}
            {...registerField('username', rules.username)}
          />

          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <TextField
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Min 6 chars"
              error={!!errors.password}
              helperText={errors.password?.message}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start"><LockIcon sx={{ color: '#52525b', fontSize: '0.85rem' }} /></InputAdornment>,
                  endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowPassword(!showPassword)} edge="end" size="small" sx={{ color: '#52525b' }}>{showPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>,
                  sx: inputSx,
                },
                inputLabel: labelSlotProps,
              }}
              {...registerField('password', rules.password)}
            />
            <TextField
              label="Confirm"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Re-enter"
              error={!!errors.confirm_password}
              helperText={errors.confirm_password?.message}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position="start"><LockIcon sx={{ color: '#52525b', fontSize: '0.85rem' }} /></InputAdornment>,
                  endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end" size="small" sx={{ color: '#52525b' }}>{showConfirmPassword ? <VisibilityOff /> : <Visibility />}</IconButton></InputAdornment>,
                  sx: inputSx,
                },
                inputLabel: labelSlotProps,
              }}
              {...registerField('confirm_password', rules.confirm_password)}
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            disabled={isPending}
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
            {isPending ? 'Creating account...' : 'Create Account'}
          </Button>
        </Box>

        <Typography align="center" sx={{ mt: 2.75, color: '#71717a', fontSize: '0.9rem' }}>
          Already have an account? <Link to="/login" style={{ color: '#f29520', fontWeight: 600 }}>Sign in</Link>
        </Typography>
      </Card>
    </div>
  );
};

export default RegisterPage;
