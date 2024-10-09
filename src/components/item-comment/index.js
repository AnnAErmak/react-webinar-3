import React from 'react';
import './style.css';
import {cn as bem} from '@bem-react/classname';
import {Link} from "react-router-dom";
import CommentForm from "../comment-form";
import AnswerForm from "../answer-form";
import {formatDate} from "../../utils/date-format";

function ItemComment({commentInfo, rootId, hiddenAnswerForm}) {

  const cn = bem('ItemComment');
  const gap = (commentInfo.level + 1) * 30

  // console.log('ItemComment', commentInfo)
  return (
    <>
        <div className={cn()}
            style={{marginLeft: `${gap}px`}}
        >
          <div className={cn('info')}>
            <span className={cn('userName')}>{commentInfo?.author?.profile?.name}</span>
            <span className={cn('userDate')}>{formatDate(commentInfo?.dateCreate)}</span>
          </div>
          <div className={cn('text')}>{commentInfo?.text}</div>
          <div className={cn('answer')}>
            <button className={cn('btn')} onClick={() => hiddenAnswerForm('answer', rootId)}>Ответить</button>
          </div>
          {/*{formName === 'answer' && activeId === commentInfo._id && <AnswerForm existsSession={existsSession} />}*/}
        </div>
    </>
  )
}

export default ItemComment
