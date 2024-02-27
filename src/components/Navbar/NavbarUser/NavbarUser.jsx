import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../redux/auth/auth-operations';
import { selectUser } from '../../../redux/auth/auth-selectors';

const NavbarUser = () => {
  const { email } = useSelector(selectUser);
  console.log(email);

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div>
      <p>{email}</p>
      <button onClick={onLogout}>Log out</button>
    </div>
  );
};

export default NavbarUser;
