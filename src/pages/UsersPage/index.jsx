import styles from "./UsersPage.module.css";
import { UserCard } from "../../components/UserCard";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";
import { useState, useEffect } from 'react'

export function UsersPage() {
  const [ usersList, setUsersList] = useState([]);

  useEffect(() => {
    async function getUsersList() {
      const response = await api.get("/users")
      setUsersList(response.data)

    }
    getUsersList()
  },[])

  return (
    <>
      <Header title="pagina de Usuário" />
      <main className={styles.mainUserPage}>
        {usersList.map((user) => (
          <UserCard id={user.id} name={user.fullName} email={user.email} />
        ))}
      </main>
      <Footer />
    </>
  );
}
