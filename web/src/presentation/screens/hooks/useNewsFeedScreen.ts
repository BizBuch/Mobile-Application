import { useCallback } from 'react';
import { useNewsFeed } from '@application/query/useNewsFeed';

/**
 * useNewsFeedScreen Hook (Web)
 * Facade Pattern: Unified interface for screen state and actions
 * Delegates to shared application layer hooks
 */
export const useNewsFeedScreen = () => {
  const { data, isLoading, isError, refetch, isRefetching } = useNewsFeed();

  const handlePostPress = useCallback((postId: string) => {
    console.log('Open post:', postId);
  }, []);

  const handleRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  return {
    posts: data ?? [],
    isLoading,
    isError,
    isRefreshing: isRefetching,
    handlePostPress,
    handleRefresh,
  };
};