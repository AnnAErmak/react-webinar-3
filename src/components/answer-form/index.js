import React from "react";
import './style.css';
import {cn as bem} from '@bem-react/classname';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import formsActions from '../../store-redux/forms/actions';

function AnswerForm({existsSession, t}) {
  const cn = bem('AnswerForm');
  const dispatch = useDispatch()
  return (
    <>
      {existsSession
      ?(
          <form className={cn()}>
            <h3>Новый ответ</h3>
            <textarea/>
            <div className={cn('actions')}>
              <button>Отправить</button>
              <button>Отмена</button>
            </div>
          </form>
        )
        : (
          <div>
            <Link to={'/login'}>Войдите</Link>,
            чтобы иметь возможнось комментировать
            <button onClick={() => dispatch(formsActions.open('comment'))}>Отмена</button>
          </div>
        )
      }
    </>

  )
}

export default AnswerForm
