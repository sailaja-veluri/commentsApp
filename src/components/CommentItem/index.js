// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentsDetails, toggleIsLike, deleteComment} = props
  const {
    id,
    inputName,
    inputComment,
    isLike,
    date,
    initialClassName,
  } = commentsDetails
  const initial = inputName.slice(0, 1)
  const time = formatDistanceToNow(date)
  const image = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeTextColor = isLike ? 'color-blue' : 'color-gray'
  const onApplyLike = () => {
    toggleIsLike(id)
  }
  const onDeleteItem = () => {
    deleteComment(id)
  }
  return (
    <li className="list-container">
      <div className="profile-comment-container">
        <div className={`profile ${initialClassName}`}>{initial}</div>
        <div className="name-comment-container">
          <div className="name-time-container">
            <h1 className="name-header">{inputName}</h1>
            <p className="time-details">{time}</p>
          </div>
          <p className="comment-info">{inputComment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          <img src={image} className="like-img" alt="Like" />
          <button
            className={`like-button ${likeTextColor}`}
            onClick={onApplyLike}
          >
            Like
          </button>
        </div>
        <button
          data-testid="delete"
          onClick={onDeleteItem}
          className="delete-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
