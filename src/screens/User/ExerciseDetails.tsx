import React from 'react';
import {ScrollView, VStack} from 'native-base';
import Tab from 'src/components/Tab';
import VideoDetails from 'src/layouts/VideoDetails';
import ExerciseHistory from 'src/layouts/ExerciseHistory';
import TableRow from 'src/components/TableRow';

const tabs = [
  {
    title: 'About',
    key: 'About',
  },
  {
    title: 'History',
    key: 'History',
  },
  {
    title: "PB's",
    key: 'PBs',
  },
];

export default function ExerciseDetails() {
  const [activeTab, setActiveTab] = React.useState('About');
  return (
    <ScrollView
      _contentContainerStyle={{
        bg: 'bg',
        px: 4,
        py: 4,
        flexGrow: 1,
      }}>
      <Tab
        tabs={tabs}
        activeTab={activeTab}
        onPress={setActiveTab}
        _containerStyle={{
          px: 3,
        }}
      />
      {activeTab === 'About' ? <VideoDetails /> : null}
      {activeTab === 'History' ? <ExerciseHistory /> : null}
      {activeTab === 'PBs' ? (
        <VStack space="4" mt={4}>
          <TableRow
            _containerStyle={{
              bg: '#EFEEF4',
              py: 2,
            }}
            _textStyle={{
              color: '#58565E',
              fontSize: 'sm',
              fontWeight: 700,
            }}
            cols={[
              {
                title: 'Reps',
              },
              {
                title: '',
              },
              {
                title: 'Max Weight',
              },
            ]}
          />
          <TableRow
            _containerStyle={{
              bg: 'white',
              py: 2,
            }}
            _textStyle={{
              color: '#7D7C81',
              fontSize: 'sm',
            }}
            cols={[
              {
                title: '1',
              },
              {
                title: '1 Feb 23',
              },
              {
                title: '71 KG',
              },
            ]}
          />
          <TableRow
            _containerStyle={{
              bg: 'white',
              py: 2,
            }}
            _textStyle={{
              color: '#7D7C81',
              fontSize: 'sm',
            }}
            cols={[
              {
                title: '2',
              },
              {
                title: '2 Feb 23',
              },
              {
                title: '45 KG',
              },
            ]}
          />
          <TableRow
            _containerStyle={{
              bg: 'white',
              py: 2,
            }}
            _textStyle={{
              color: '#7D7C81',
              fontSize: 'sm',
            }}
            cols={[
              {
                title: '3',
              },
              {
                title: '3 Feb 23',
              },
              {
                title: '65 KG',
              },
            ]}
          />
        </VStack>
      ) : null}
    </ScrollView>
  );
}
