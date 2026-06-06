import { useLogin } from '@application/command/useLogin';
import { useLoginForm } from '@forms/useLoginForm';
import { Button, Input } from '../components';
import { theme } from '../theme';

const LoginScreen: React.FC = () => {
  const { register, handleSubmit, rules } = useLoginForm();
  const { mutate: login, isPending } = useLogin();

  const onSubmit = (data: { username: string; password: string }) => {
    login(data);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Sign in to your BizBuch account</p>

        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter your username"
            {...register('username', rules.username)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register('password', rules.password)}
          />
          <Button type="submit" fullWidth disabled={isPending}>
            {isPending ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '16px',
    backgroundColor: theme.colors.background,
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    padding: '32px',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 700,
    color: theme.colors.gray900,
    marginBottom: '4px',
  },
  subtitle: {
    fontSize: '14px',
    color: theme.colors.gray500,
    marginBottom: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
};

export default LoginScreen;