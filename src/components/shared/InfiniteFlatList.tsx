import React, {useRef, useCallback} from 'react';
import {FlatList, FlatListProps, RefreshControl} from 'react-native';

interface InfiniteFlatListProps<ItemT> extends FlatListProps<ItemT> {
  onLoadMore?: () => void;
  onRefresh?: () => void;
  isFetching?: boolean;
  isRefreshing?: boolean;
}

function InfiniteFlatList<ItemT>({
  onLoadMore,
  onRefresh,
  isFetching,
  isRefreshing,
  ...props
}: InfiniteFlatListProps<ItemT>) {
  const flatListRef = useRef<FlatList<ItemT>>(null);

  const onEndReached = useCallback(() => {
    if (!isFetching) {
      onLoadMore?.();
    }
  }, [isFetching, onLoadMore]);

  const handleRefresh = useCallback(() => {
    if (!isRefreshing) {
      onRefresh?.();
    }
  }, [isRefreshing, onRefresh]);

  return (
    <FlatList
      ref={flatListRef}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing || false}
          onRefresh={handleRefresh}
        />
      }
      {...props}
    />
  );
}

export default InfiniteFlatList;
