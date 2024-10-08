import React from 'react';
import './style.css';
import {cn as bem} from '@bem-react/classname';
import {Link} from "react-router-dom";
import CommentForm from "../comment-form";
import AnswerForm from "../answer-form";

function ItemComment({activeId, existsSession, hiddenAnswerForm, formName, commentInfo}) {

  const cn = bem('ItemComment');
  const gap = (commentInfo.level - 1) * 30

  console.log('ItemComment', commentInfo)
  return (
    <>
      {commentInfo?.level > 0 &&
        <li className={cn()}
            style={{marginLeft: `${gap}px`}}
        >
          <div className={cn('info')}>
            <span className={cn('userName')}>{commentInfo?.author?.profile?.name}</span>
            <span className={cn('userDate')}>{commentInfo?.dateCreate}</span>
          </div>
          <div className={cn('text')}>{commentInfo?.text}</div>
          <div className={cn('answer')}>
            <button onClick={() => hiddenAnswerForm('answer', commentInfo._id)}>Ответить</button>
          </div>
          {formName === 'answer' && activeId === commentInfo._id && <AnswerForm existsSession={existsSession} />}
        </li>
      }
    </>
  )
}

export default ItemComment
