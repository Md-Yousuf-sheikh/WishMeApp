import { AddIcon } from '@assets/icons';
import { Button, Pressable, ScrollView, Text, VStack } from 'native-base';
import React from 'react';

export default function Warmup() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      _contentContainerStyle={{
        bg: 'bg',
        px: 4,
        py: 4,
        flexGrow: 1,
        gap: 6,
        bgColor: 'white',
        justifyContent: 'space-between',
      }}>
      <VStack space={3}>
        <Text color="gray.2">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit.
        </Text>
        <Text color="gray.2">
          A gránit az tiszta lap; az nem mond semmit. “Végtelenség!” - az a
          felelete. Nála be van csukva a kön
        </Text>
        <Text color="gray.2">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo con
        </Text>
        <Text color="gray.2">
          Enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
          sed quia consequuntur ma
        </Text>
      </VStack>

      <VStack space={4} mt={5}>
        <Button
          w="full"
          bg={'#68696B'}
          rounded={8}
          py={3}
          _text={{color: 'white', fontWeight: 700}}
          _pressed={{bg: '#68696B90'}}>
          Complete
        </Button>

        <Pressable
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
          borderRadius={8}
          borderWidth={1}
          borderColor="primary.100"
          bg="white"
          py={2}
          onPress={() => setIsOpen(true)}>
          <AddIcon />
          <Text color="primary.100" fontSize="sm" fontWeight={700}>
            Add Notes
          </Text>
        </Pressable>
      </VStack>
    </ScrollView>
  );
}
