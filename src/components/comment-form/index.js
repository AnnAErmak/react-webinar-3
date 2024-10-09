import React from "react";
import './style.css';
import {cn as bem} from '@bem-react/classname';
import {Link} from "react-router-dom";

function CommentForm({existsSession, t}) {
  const cn = bem('CommentForm');
  return (
    <>
      {existsSession
      ?(
          <form className={cn()}>
            <h3 className={cn('title')}>Новый комментарий</h3>
            <textarea className={cn('textarea')} placeholder={'Текст'}/>
            <button className={cn('btn')}>Отправить</button>
          </form>
        )
        : (
          <div className={cn('login')}>
            <Link className={cn('link')} to={'/login'}>Войдите </Link>,
            <span>&nbsp;чтобы иметь возможнось комментировать</span>
          </div>
        )
      }
    </>

  )
}

export default CommentForm
