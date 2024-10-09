import React from 'react';
import './style.css';
import ItemComment from "../item-comment";
import {cn as bem} from "@bem-react/classname";
import treeToList from "../../utils/tree-to-list";
import AnswerForm from "../answer-form";

function RootComments({userAnswer, root, rootId, currentId, existsSession, openAnswerForm, onHideAnswerForm, formName, onSignIn, onComment, t}) {
  const cn = bem('RootComments');
  const commentsList = treeToList(root.children, (item, level) => ({...item, level}));
  // console.log('RootComments commentsList', commentsList)
  // console.log('RootComments rootId', rootId)
  return (
    <>
      <div className={'RootComments'}>
        <ItemComment rootId={root._id}  commentInfo={root} openAnswerForm={openAnswerForm} t={t}/>
        {commentsList.length > 0 && commentsList.map(item => <ItemComment t={t} rootId={root._id}  key={item._id} commentInfo={item} openAnswerForm={openAnswerForm}/>)}
      </div>
      {formName === 'answer' && rootId === root._id && <AnswerForm userAnswer={userAnswer} onSignIn={onSignIn} onHideAnswerForm={onHideAnswerForm} existsSession={existsSession} onComment={onComment} currentId={currentId}  t={t} />}
    </>


  )
}

export default RootComments
