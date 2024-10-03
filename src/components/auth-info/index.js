import React, {useCallback} from "react";
import './style.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import useSelector from "../../hooks/use-selector";
import useStore from "../../hooks/use-store";


function AuthInfo() {
  const store = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  const select = useSelector(state => ({
    isAuth: state.auth.isAuth,
    userName: state.auth.userName,
  }))

  const callbacks = {
    onSignIn: useCallback(() => navigate('/login', {state: {back: location.pathname}}), []),
    onSignOut: useCallback(() => store.actions.auth.logOut(), []),
  };

  return (
    <div className={'AuthInfo'}>
      {select.isAuth && <Link to={"/profile"}>{select.userName}</Link>}
      {select.isAuth
        ? <button onClick={callbacks.onSignOut}>Выйти</button>
        : <button onClick={callbacks.onSignIn}>Войти</button>
      }
    </div>
  );
};

export default AuthInfo
