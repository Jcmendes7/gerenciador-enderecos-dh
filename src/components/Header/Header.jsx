import styles from './Header.module.css'
import { List } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header({ title }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <strong>{ title }</strong>
      </div>
      <button className={styles.listMenu}>
        <List size={45} />
      </button>
      <div className={styles.navLink}>
        <NavLink to="/users">Usuários</NavLink>
        <NavLink to="/address">Endereços</NavLink>
        <NavLink to="/users/register">Cadastrar Usuário</NavLink>
        <NavLink to="/address/register">Cadastrar endereço</NavLink>
      </div>
    </header>
  )
}