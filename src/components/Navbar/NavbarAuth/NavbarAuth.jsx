import { NavLink } from 'react-router-dom';

import styles from './navbar-auth.module.css';

const NavbarAuth = () => {
  return (
    <div className={styles.loginContainer}>
      <NavLink className={styles.loginNav} to="/signup">
        SignUp
      </NavLink>
      <NavLink className={styles.loginNav} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
