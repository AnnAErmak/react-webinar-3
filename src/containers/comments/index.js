import React, {memo, useCallback} from 'react';
import {useDispatch, useSelector as useSelectorRedux} from "react-redux";
import shallowequal from "shallowequal";
import useTranslate from "../../hooks/use-translate";
import CommentsLayout from "../../components/comments-layout";
import AllComments from "../../components/root-comments";
import listToTree from "../../utils/list-to-tree";
import treeToList from "../../utils/tree-to-list";
import useSelector from "../../hooks/use-selector";
import CommentForm from "../../components/comment-form";
import formsActions from "../../store-redux/forms/actions";
import commentsActions from "../../store-redux/comments/actions";
import RootComments from "../../components/root-comments";


function Comments() {
  const {t} = useTranslate();
  const dispatch = useDispatch()

  const selectRedux = useSelectorRedux(state => ({
    comments: state.comments.comments,
    count: state.comments.count,
    articleId: state.article.data._id,
    activeRootId: state.comments.activeIdComment,
    form: state.forms.name,
  }), shallowequal);

  const select = useSelector(state => ({
    exists: state.session.exists,
  }))

  const commentsRoots = listToTree([{_id: selectRedux.articleId, parent: null}, ...selectRedux.comments])
  // const commentsList = treeToList(commentsTree, (item, level) => ({...item, level}));

  const callbacks = {
    hiddenAnswerForm: useCallback((name, activeId)=>{
      console.log('Comments hiddenAnswerForm',activeId)
      dispatch(commentsActions.setActiveIdComment(activeId))
      dispatch(formsActions.open(name))
    }, []),
  }

  console.log('Comments commentsRoots', commentsRoots)
  return (
    <CommentsLayout t={t} countComments={selectRedux.count}>
      {commentsRoots[0].children.map(root => (
        <RootComments
          key={root._id}
          rootId={selectRedux.activeRootId}
          root={root}
          existsSession={select.exists}
          hiddenAnswerForm={callbacks.hiddenAnswerForm}
          formName={selectRedux.form}
        />))}
      {/*<AllComments activeId={selectRedux.activeId} hiddenAnswerForm = {callbacks.hiddenAnswerForm} formName={selectRedux.form} existsSession={select.exists} comments={commentsList}/>*/}
      {selectRedux.form === 'comment' && <CommentForm existsSession={select.exists} t={t}/>}
    </CommentsLayout>
  )
}

export default memo(Comments)
