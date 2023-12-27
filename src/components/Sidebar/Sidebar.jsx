import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=50&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div className={styles.profile}>
        <img src="https://github.com/BernardoMagalhaes09.png" />
        <strong>Bernardo Magalhães</strong>
        <span>Tech Lead</span>
      </div>

      <footer>
        <a href="#">Editar Perfil</a>
      </footer>
    </aside>
  )
}