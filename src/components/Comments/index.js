import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {inputName: '', inputComment: '', commentsList: []}

  toggleIsLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLike: !eachComment.isLike}
        }
        return eachComment
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {inputName, inputComment} = this.state
    const selectedBackgroundColorClassName = `${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      inputName,
      inputComment,
      date: new Date(),
      isLiked: false,
      initialClassName: selectedBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      inputName: '',
      inputComment: '',
    }))
  }

  onChangeComment = event => {
    this.setState({inputComment: event.target.value})
  }

  onChangeName = event => {
    this.setState({inputName: event.target.value})
  }

  deleteComment = id => {
    const {commentsList} = this.state
    const filteredCommentsList = commentsList.filter(each => each.id !== id)
    this.setState({
      commentsList: filteredCommentsList,
    })
  }

  render() {
    const {inputName, inputComment, commentsList} = this.state
    return (
      <>
        <div className="bg-container">
          <div className="comments-container">
            <h1 className="header">Comments</h1>
            <div className="form-img-container">
              <div className="form-container">
                <p className="para">Say something about 4.0 Technologies</p>
                <form className="form" onSubmit={this.onAddComment}>
                  <input
                    value={inputName}
                    onChange={this.onChangeName}
                    className="input-name"
                    placeholder="Your Name"
                  />
                  <textarea
                    rows="6"
                    cols="30"
                    value={inputComment}
                    onChange={this.onChangeComment}
                    className="textarea"
                    placeholder="Your Comment"
                  >
                    Your Comment
                  </textarea>
                  <button type="submit" className="add-button">
                    Add Comment
                  </button>
                </form>
              </div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="comments-image"
              />
            </div>

            <div className="comments-count-container">
              <div className="comments-count">{commentsList.length}</div>
              <p className="comments-para-ul">Comments</p>
            </div>
            <ul className="unOrder-comments-list">
              {commentsList.map(eachOne => (
                <CommentItem
                  key={eachOne.id}
                  commentsDetails={eachOne}
                  toggleIsLike={this.toggleIsLike}
                  deleteComment={this.deleteComment}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Comments
