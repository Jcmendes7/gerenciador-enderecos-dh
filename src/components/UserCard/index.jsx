import styles from './UserCard.module.css'
export function UserCard({ id, name, email }) {
  return (
    <a href='#' className={styles.userCardContainer}>
      <span>Id: {id}</span>
      <span>Nome: {name}</span>
      <span>Email: {email}</span>
    </a>
  );
}