import style from './Header.module.css'
import igniteLogo from '../../assets/ignite simbol.svg'

export function Header() {
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt='Logo' />
    </header>
  )
}