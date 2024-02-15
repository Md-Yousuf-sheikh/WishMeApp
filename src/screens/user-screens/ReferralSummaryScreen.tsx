import useNavigate from '@hooks/useNavigate';
import {logout, selectUser} from '@store/features/authSlice';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Header from 'src/components/headers/Header';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';

const ReferralSummaryScreen = () => {
  // hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authUser = useSelector(selectUser);
  return (
    <Background type="scroll">
      <Header title="Referral Summary" />
    </Background>
  );
};

const referralSummaryScreen = asRoute(
  ReferralSummaryScreen,
  'referralSummary',
  {
    title: 'Notification',
    animation: 'slide_from_right',
  },
);

export default referralSummaryScreen;
