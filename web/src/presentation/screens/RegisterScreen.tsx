import { useRegister } from '@application/command/useRegister';
import { useRegisterForm } from '@forms/useRegisterForm';
import { Button, Input } from '../components';
import { theme } from '../theme';

const RegisterScreen: React.FC = () => {
  const { register: registerField, handleSubmit, rules } = useRegisterForm();
  const { mutate: registerUser, isPending } = useRegister();

  const onSubmit = (data: any) => {
    registerUser(data);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '16px', backgroundColor: theme.colors.background }}>
      <div style={{ width: '100%', maxWidth: '400px', padding: '32px', backgroundColor: theme.colors.white, borderRadius: theme.borderRadius.lg, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, color: theme.colors.gray900, marginBottom: '4px' }}>Create Account</h1>
        <p style={{ fontSize: '14px', color: theme.colors.gray500, marginBottom: '24px' }}>Join BizBuch today</p>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Input label="Email" placeholder="Enter your email" {...registerField('email', rules.email)} />
          <Input label="Password" type="password" placeholder="Create a password" {...registerField('password', rules.password)} />
          <Button type="submit" fullWidth disabled={isPending}>{isPending ? 'Creating account...' : 'Create Account'}</Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
