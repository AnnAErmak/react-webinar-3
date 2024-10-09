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
            <h3 className={cn('title')}>Новый ответ</h3>
            <textarea className={cn('textarea')} placeholder={`Мой ответ для `}/>
            <div className={cn('actions')}>
              <button className={cn('btn')}>Отправить</button>
              <button className={cn('btn')}>Отмена</button>
            </div>
          </form>
        )
        : (
          <div className={cn('login')}>
            <Link className={cn('link')} to={'/login'}>Войдите</Link>
            <span>, чтобы иметь возможнось комментировать. </span>
            <button className={cn('cancel')} onClick={() => dispatch(formsActions.open('comment'))}>Отмена</button>
          </div>
        )
      }
    </>

  )
}

export default AnswerForm
