import { useNewsFeedPage } from './hooks/useNewsFeedPage';
import { CenteredLoader, CenteredError, EmptyState } from '../components';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const NewsFeedPage: React.FC = () => {
  const { posts, isLoading, isError, handleRefresh } = useNewsFeedPage();

  if (isLoading) return <CenteredLoader message="Loading posts..." />;
  if (isError) return <CenteredError message="Failed to load posts" onRetry={handleRefresh} />;

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Typography variant="h1" sx={{ mb: 2 }}>
        News Feed
      </Typography>
      {posts.length === 0 ? (
        <EmptyState message="No posts yet. Be the first to share!" />
      ) : (
        posts.map((post) => (
          <Card key={post.id} sx={{ mb: 1.5 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 600 }} color="text.primary">
                  {post.author}
                </Typography>
                <Typography variant="caption" color="text.disabled">
                  {new Date(post.timestamp).toLocaleDateString()}
                </Typography>
              </Box>
              {post.content && (
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {post.content}
                </Typography>
              )}
              {post.image_url && (
                <Box
                  component="img"
                  src={post.image_url}
                  alt="Post"
                  sx={{ width: '100%', borderRadius: 1, mb: 1 }}
                />
              )}
              <Typography variant="body2" color="text.secondary">
                ❤️ {post.likes} &nbsp; 💬 {post.comments}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default NewsFeedPage;