import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/BernardoMagalhaes09.png',
      name: "Bernardo Magalhães",
      role: "Tech Lead"
    },
    publishedAt: new Date("2023-11-07 10:21:30"),
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: "Estou fazendo um feed de noticias aqui para testar se meus conhecimentos com front-end estão ficando legais. Essa pagina inteira é feita em React e  ta bem legal. 🚀" },
      { type: 'link', content: "esse link é só pra teste (não faz nada)" },
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Ciber-marcelo.png',
      name: "Marcelo Moreira",
      role: "Desenvolvedor de Software"
    },
    publishedAt: new Date("2023-11-05 09:31:30"),
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: "Um prazer estar aqui com voces 🚀" },
      { type: 'link', content: "link de teste" },
    ]
  }, {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/rafaelmbsouza.png',
      name: "Rafael Magalhães",
      role: "Gerente de Produto"
    },
    publishedAt: new Date("2023-11-02 15:50:30"),
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋" },
      { type: 'paragraph', content: "Esse é mais um teste de postagem do front que estou criando" },
      { type: 'link', content: "link de teste" },
    ]
  },
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
