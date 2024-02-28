import {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import Contacts, {Contact} from 'react-native-contacts';

interface UseContactsReturnType {
  contacts: Contact[];
  getContacts: () => void;
}

const useContacts = (): UseContactsReturnType => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [permissionGranted, setPermissionGranted] = useState<boolean>(false);

  const requestContactsPermission = async (): Promise<void> => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonPositive: 'Please accept bare mortal',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setPermissionGranted(true);
      }
    } catch (error) {
      console.error('Permission error: ', error);
    }
  };

  const getContacts = (): void => {
    if (permissionGranted) {
      Contacts.getAll()
        .then((contactsData: Contact[]) => {
          setContacts(contactsData);
        })
        .catch((error: Error) => {
          console.log(error);
        });
    } else {
      console.warn('Contacts permission not granted');
    }
  };

  useEffect(() => {
    requestContactsPermission();
  }, []);

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [permissionGranted]);

  return {contacts, getContacts};
};

export default useContacts;
