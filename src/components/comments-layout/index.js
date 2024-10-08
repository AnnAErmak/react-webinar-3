import React from "react";
import './style.css';

function CommentsLayout({children, countComments, t}){
  return(
    <div className={'CommentsLayout'}>
      <span>{`${t('comment.comments')} (${countComments})`}</span>
      {children}
    </div>
  )
}

export default CommentsLayout
