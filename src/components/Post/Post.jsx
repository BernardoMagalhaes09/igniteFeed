import { Comment } from '../Comment/Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import styles from './Post.module.css'
import { useState } from 'react'


export function Post({ author, publishedAt, content, id }) {
  const [comments, setComments] = useState([
    {
      id: 1,
      content: 'Muito bom Bernardo, Sucesso',
      author: 'Julio da Silva',
      avatarUrl: 'https://github.com/gaearon.png'
    },
    {
      id: 2,
      content: 'Parabéns Bernardo!!',
      author: 'João Pedro',
      avatarUrl: 'https://github.com/zimer69.png'
    },
    {
      id: 3,
      content: 'Sucesso na sua carreira',
      author: 'Débora Falabella',
      avatarUrl: 'https://github.com/Indira91.png'
    }
  ])
  const [newCommentText, setNewCommentText] = useState('')

  function handleCreateNewComment() {
    event.preventDefault()
    const newComment = {
      id: comments.length + 1,
      content: event.target.comment.value,
      author: 'Julio da Silva',
      avatarUrl: 'https://github.com/gaearon.png'
    }
    setComments([...comments, newComment])
    setNewCommentText('')

  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment.id !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentario"
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              content={comment.content}
              author={comment.author}
              avatarUrl={comment.avatarUrl}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}