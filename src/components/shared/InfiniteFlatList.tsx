import {VStack} from 'native-base';
import React, {useRef, useCallback} from 'react';
import {
  ActivityIndicator,
  FlatList,
  FlatListProps,
  RefreshControl,
} from 'react-native';

interface InfiniteFlatListProps<ItemT> extends FlatListProps<ItemT> {
  onLoadMore?: () => void;
  onRefresh?: () => void;
  isFetching?: boolean;
  isRefreshing?: boolean;
  isOnLoadMore?: boolean;
  listData?: any[];
  perPage?: number;
}

function InfiniteFlatList<ItemT>({
  onLoadMore,
  onRefresh,
  isFetching,
  isRefreshing,
  listData,
  perPage = 10,
  ...props
}: InfiniteFlatListProps<ItemT>) {
  const flatListRef = useRef<FlatList<ItemT>>(null);

  const onEndReached = useCallback(() => {
    if (!isFetching && listData && listData?.length >= perPage) {
      onLoadMore?.();
    }
    console.log('on onEndReached');
  }, [isFetching, listData, onLoadMore, perPage]);

  const handleRefresh = useCallback(() => {
    if (!isRefreshing) {
      onRefresh?.();
    }
  }, [isRefreshing, onRefresh]);
  const renderLoader = () => {
    return (
      listData &&
      listData?.length >= perPage &&
      isFetching && (
        <VStack>
          <ActivityIndicator size={'large'} />
        </VStack>
      )
    );
  };
  return (
    <FlatList
      ref={flatListRef}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderLoader}
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
