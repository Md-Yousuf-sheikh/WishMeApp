import AuthRoutes from '@routes/AuthRoutes';
import {selectAuth} from '@store/features/authSlice';
import {useSelector} from 'react-redux';
import ProfileCreationRoutes from './ProfileCreationRoutes';
import LayoutRoutes from './LayoutRoutes';

export default function Routes() {
  const {accessToken} = useSelector(selectAuth);
  console.log('accessToken', accessToken);

  return accessToken ? <LayoutRoutes /> : <AuthRoutes />;
}
