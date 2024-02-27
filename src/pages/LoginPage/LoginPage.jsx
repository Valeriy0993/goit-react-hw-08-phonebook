import { useSelector, useDispatch } from 'react-redux';

import LoginForm from '../../components/LoginForm/LoginForm';
import Loader from '../../components/Loader/Loader';
import { login } from '../../redux/auth/auth-operations';

import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';

const LoginPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <h1>Login page</h1>
      {authLoading && <Loader />}
      <LoginForm onSubmit={handleLogin} />
      {authError && <p style={{ color: 'red' }}>{authError}</p>}
    </div>
  );
};

export default LoginPage;
