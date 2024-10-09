import React from 'react';
import './style.css';
import ItemComment from "../item-comment";
import {cn as bem} from "@bem-react/classname";
import treeToList from "../../utils/tree-to-list";
import AnswerForm from "../answer-form";

function RootComments({root, rootId, existsSession, hiddenAnswerForm, formName,}) {
  const cn = bem('RootComments');
  const commentsList = treeToList(root.children, (item, level) => ({...item, level}));
  // console.log('RootComments commentsList', commentsList)
  // console.log('RootComments rootId', rootId)
  return (
    <>
      <div className={'RootComments'}>
        <ItemComment rootId={root._id} commentInfo={root} hiddenAnswerForm={hiddenAnswerForm}/>
        {/*<div className={cn('info')}>*/}
        {/*  <span className={cn('userName')}>{root?.author?.profile?.name}</span>*/}
        {/*  <span className={cn('userDate')}>{root?.dateCreate}</span>*/}
        {/*</div>*/}
        {/*<div className={cn('text')}>{root?.text}</div>*/}
        {/*<div className={cn('answer')}>*/}
        {/*  <button onClick={() => hiddenAnswerForm('answer', root._id)}>Ответить</button>*/}
        {/*</div>*/}
        {commentsList.length > 0 && commentsList.map(item => <ItemComment rootId={root._id} key={item._id} commentInfo={item} hiddenAnswerForm={hiddenAnswerForm}/>)}
      </div>
      {formName === 'answer' && rootId === root._id && <AnswerForm existsSession={existsSession} />}
    </>


  )
}

export default RootComments
