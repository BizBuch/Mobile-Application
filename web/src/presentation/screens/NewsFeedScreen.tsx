import { useNewsFeedScreen } from './hooks/useNewsFeedScreen';
import { CenteredLoader, CenteredError } from '../components';

const NewsFeedScreen: React.FC = () => {
  const { posts, isLoading, isError, handleRefresh } =
    useNewsFeedScreen();

  if (isLoading) return <CenteredLoader message="Loading posts..." />;
  if (isError) return <CenteredError message="Failed to load posts" onRetry={handleRefresh} />;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>News Feed</h1>
      {posts.length === 0 ? (
        <p style={styles.empty}>No posts yet. Be the first to share!</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} style={styles.postCard}>
            <div style={styles.postHeader}>
              <span style={styles.author}>{post.author}</span>
              <span style={styles.timestamp}>
                {new Date(post.timestamp).toLocaleDateString()}
              </span>
            </div>
            {post.content && <p style={styles.content}>{post.content}</p>}
            {post.image_url && (
              <img src={post.image_url} alt="Post" style={styles.postImage} />
            )}
            <div style={styles.postStats}>
              <span>❤️ {post.likes}</span>
              <span>💬 {post.comments}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '16px',
  },
  header: {
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '16px',
    color: '#1f2937',
  },
  empty: {
    textAlign: 'center' as const,
    color: '#6b7280',
    padding: '40px 0',
  },
  postCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  postHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  author: {
    fontWeight: 600,
    color: '#1f2937',
  },
  timestamp: {
    fontSize: '12px',
    color: '#9ca3af',
  },
  content: {
    fontSize: '15px',
    lineHeight: 1.5,
    color: '#374151',
    marginBottom: '8px',
  },
  postImage: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '8px',
  },
  postStats: {
    display: 'flex',
    gap: '16px',
    fontSize: '14px',
    color: '#6b7280',
  },
};

export default NewsFeedScreen;