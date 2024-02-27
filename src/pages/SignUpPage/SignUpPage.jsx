import { useSelector, useDispatch } from 'react-redux';

import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Loader from '../../components/Loader/Loader';
import { signup } from '../../redux/auth/auth-operations';
import {
  selectAuthLoading,
  selectAuthError,
} from '../../redux/auth/auth-selectors';

const SignUpPage = () => {
  const authLoading = useSelector(selectAuthLoading);
  const authError = useSelector(selectAuthError);
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <main>
      <div>
        <h1>Please Sign Up</h1>
        {authLoading && <Loader />}
        <SignUpForm onSubmit={handleSignup} />
        {authError && <p style={{ color: 'red' }}>{authError}</p>}
      </div>
    </main>
  );
};

export default SignUpPage;
