import React, {useState} from 'react';
import './style.css';
import {cn as bem} from '@bem-react/classname';
import {formatDate} from "../../utils/date-format";

function ItemComment({commentInfo, rootId, openAnswerForm, t}) {

  const cn = bem('ItemComment');
  const gap = (commentInfo.level + 1) * 30

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
            <button className={cn('btn')}
                    onClick={() => openAnswerForm('answer', rootId, commentInfo._id, commentInfo?.author?.profile?.name)}
            >
              {t('comments.answer')}
            </button>
          </div>
        </div>
    </>
  )
}

export default ItemComment
