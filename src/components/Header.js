import classes from './Header.module.css';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { authActions } from '../store/index';

const Header = () => {
  const isAuth=useSelector((state)=>state.auth.isAuthenticated)

const dispatch=useDispatch();


const logouthandler=(e)=>
{
  e.preventDefault();
  dispatch(authActions.logout());
}
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
    {isAuth &&( <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
           <button onClick={logouthandler}>Logout</button>
          </li>
        </ul>
      </nav>)}
    </header>
  );
};

export default Header;
