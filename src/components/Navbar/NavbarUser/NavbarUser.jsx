import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../redux/auth/auth-operations';
import { selectUser } from '../../../redux/auth/auth-selectors';

import styles from './navbar-user.module.css';

const NavbarUser = () => {
  const { email } = useSelector(selectUser);
  console.log(email);

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div className={styles.userContainer}>
      <p>{email}</p>
      <button className={styles.logBtn} onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};

export default NavbarUser;
