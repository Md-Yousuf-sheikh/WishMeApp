import {Center, HStack, Skeleton, VStack} from 'native-base';

export const SkeletonsBlogCard = () => {
  return (
    <Center w="100%">
      <VStack
        w="90%"
        maxW="400"
        borderWidth="1"
        space={8}
        rounded="md"
        _dark={{
          borderColor: 'coolGray.500',
        }}
        _light={{
          borderColor: 'coolGray.200',
        }}
        p="4">
        <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
        <VStack flex="3" space="4">
          <Skeleton.Text />
          <HStack space="2" alignItems="center">
            <Skeleton size="10" rounded="full" />
            <VStack>
              <Skeleton h="3" rounded="full" />
              <Skeleton h="3" rounded="full" />
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
};
