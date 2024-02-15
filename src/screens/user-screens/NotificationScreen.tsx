import useNavigate from '@hooks/useNavigate';
import {selectUser} from '@store/features/authSlice';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from 'src/components/headers/Header';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';

const NotificationScreen = () => {
  // hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(selectUser);

  return (
    <Background type="scroll">
      <Header title="Notification" />
    </Background>
  );
};

const notificationScreen = asRoute(NotificationScreen, 'notification', {
  title: 'Notification',
  animation: 'slide_from_right',
});

export default notificationScreen;
