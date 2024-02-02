import { AddIcon } from '@assets/icons';
import { Button, Pressable, ScrollView, Text, VStack } from 'native-base';
import React from 'react';

export default function CirCuit() {
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
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatu. A gránit az tiszta lap; az nem mond
          semmit. “Végtelenség!” - az a felelete. Nála be van csukva a kön
        </Text>
        <Text color="gray.2">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id es
        </Text>
        <Text color="gray.2">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo con
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
