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
            <h3></h3>
            <textarea className={cn('textarea')} rows="5"/>
            <div className={cn('actions')}>
              <button>Отправить</button>
            </div>
          </form>
        )
        : (
          <div>
            <Link to={'/login'}>Войдите</Link>,
            чтобы иметь возможнось комментировать
          </div>
        )
      }
    </>

  )
}

export default CommentForm
