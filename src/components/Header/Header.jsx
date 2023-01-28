import styles from './Header.module.css'
import { List } from 'phosphor-react'
import logoHeader from '../../assets/logo.png'

export function Header({ title }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoHeader} alt="" />
        <strong>{ title }</strong>
      </div>
      <button className={styles.listMenu}>
        <List size={45} />
      </button>
      <div className={styles.navLink}>
        <a href="">Usuários</a>
        <a href="">Cadastrar Usuário</a>
        <a href="">Cadastrar endereço</a>
      </div>
    </header>
  )
}