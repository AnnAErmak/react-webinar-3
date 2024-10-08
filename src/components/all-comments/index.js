import React from 'react';
import './style.css';
import ItemComment from "../item-comment";

function AllComments({activeId, hiddenAnswerForm, formName, existsSession, comments}) {

  return (
    <>
      <ul className={'AllComments'}>
        {comments.map(item => (
          <ItemComment activeId={activeId} formName={formName} existsSession={existsSession} hiddenAnswerForm={hiddenAnswerForm} key={item._id} commentInfo = {item} />
        ))}
      </ul>
    </>


  )
}

export default AllComments
