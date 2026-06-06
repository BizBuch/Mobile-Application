const WelcomeScreen: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#FF9933' }}>BizBuch</h1>
        <p style={{ color: '#6b7280', marginTop: '8px' }}>Welcome to BizBuch — your professional network</p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
