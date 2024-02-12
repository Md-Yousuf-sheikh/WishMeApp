import React from 'react';
import {Modal, Text, VStack} from 'native-base';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  item?: any;
}

export default function WishViewModal({isOpen, onClose}: IProps) {
  //  formik

  return (
    <Modal zIndex={99} isOpen={isOpen} onClose={onClose}>
      <Modal.Content w="100%" h="50%">
        <VStack>
          <Text>Hello</Text>
        </VStack>
      </Modal.Content>
    </Modal>
  );
}
