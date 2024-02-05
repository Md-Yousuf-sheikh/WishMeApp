import React, {useRef, useCallback} from 'react';
import {FlatList, FlatListProps} from 'react-native';

interface InfiniteFlatListProps<ItemT> extends FlatListProps<ItemT> {
  onLoadMore?: () => void;
  isFetching?: boolean;
}

function InfiniteFlatList<ItemT>({
  onLoadMore,
  isFetching,
  ...props
}: InfiniteFlatListProps<ItemT>) {
  const flatListRef = useRef<FlatList<ItemT>>(null);

  const onEndReached = useCallback(() => {
    if (!isFetching) {
      onLoadMore?.();
    }
  }, [isFetching, onLoadMore]);

  return (
    <FlatList
      ref={flatListRef}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1}
      {...props}
    />
  );
}

export default InfiniteFlatList;
