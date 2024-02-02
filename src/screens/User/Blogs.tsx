import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'native-base';
import BlogCard from 'src/components/blog/BlogCard';
import {useGetAllBlogsQuery} from '@store/apis/blogs';
import {useNavigation} from '@react-navigation/native';
import {SkeletonsBlogCard} from 'src/components/skeletons';

const blogs = [
  {
    _id: '10',
    title: 'Australia’s New GYM',
    description:
      'Go from Figma to code in minimum amount of time using Locofy. Take your.',
    image:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      name: 'Shawn Mendes',
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    },
  },
  {
    _id: '11',
    title: 'Australia’s New GYM',
    description:
      'Go from Figma to code in minimum amount of time using Locofy. Take your.',
    image:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      name: 'Shawn Mendes',
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    },
  },
  {
    _id: '12',
    title: 'Australia’s New GYM',
    description:
      'Go from Figma to code in minimum amount of time using Locofy. Take your.',
    image:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      name: 'Shawn Mendes',
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    },
  },
  {
    _id: '13',
    title: 'Australia’s New GYM',
    description:
      'Go from Figma to code in minimum amount of time using Locofy. Take your.',
    image:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    author: {
      name: 'Shawn Mendes',
      image:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
    },
  },
];

export default function Blogs() {
  // Hooks
  const navigation = useNavigation();

  //  APIS
  const {data, isLoading} = useGetAllBlogsQuery(null);
  //
  return (
    <FlatList
      data={data?.data?.blogs || []}
      renderItem={({item}) => {
        return (
          <BlogCard
            onPress={() =>
              navigation.navigate('BlogDetails', {
                item: item,
              })
            }
            {...item}
          />
        );
      }}
      keyExtractor={item => item?._id}
      _contentContainerStyle={{
        px: 4,
        py: 8,
        gap: 8,
        bg: '#F7F7F7',
      }}
      ListEmptyComponent={
        isLoading ? (
          <>
            <SkeletonsBlogCard />
            <SkeletonsBlogCard />
            <SkeletonsBlogCard />
            <SkeletonsBlogCard />
          </>
        ) : (
          <></>
        )
      }
    />
  );
}
