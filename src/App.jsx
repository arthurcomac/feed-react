import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

function App() {
  return(
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>        
        <main>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  )
}

export default App
