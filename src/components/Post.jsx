import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/arthurcomac.png" alt="imagem do autor" />
          <div className={styles.authorInfo}>
            <strong>Arthur Machado</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='7 de dezembro 2022 ás 14:32:00' dateTime='2022-12-07 14:32:00'>Publicado a 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galera</p>
        <p>acabei de subir mais um projeto no meu portifolio, é um projeto que fiz no nlw</p>
        <p>o nome do projeto é bla bla bla</p>
        <p><a href="">arthurmachado/blablabla</a></p>
        <p><a href="">#nlw</a>{' '}
          <a href="">#estudando</a>{' '}
          <a href="">#react</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário...'
        />
        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}