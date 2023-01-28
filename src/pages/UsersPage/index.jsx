import styles from "./UsersPage.module.css";
import { UserCard } from "../../components/UserCard";
import { Header } from "../../components/Header/Header";

export function UsersPage() {
  const usersList = [
    {
      id: 1,
      name: "Jose Carlos",
      email: "josecarlos@gmail.com",
    },
    {
      id: 2,
      name: "Jean Felipe",
      email: "jeanfelipe@gmail.com",
    },
    {
      id: 3,
      name: "Danilo Alexandre",
      email: "daniloalexandre@gmail.com",
    },
    {
      id: 4,
      name: "Fernanda Angelis",
      email: "fernanda@gmail.com",
    },
    {
      id: 5,
      name: "Tatiana Bravi",
      email: "tatiana@gmail.com",
    },
  ];

  return (
    <>
      <Header title="pagina de Usuário" />
      <main className={styles.mainUserPage}>
        {usersList.map((user) => (
          <UserCard id={user.id} name={user.name} email={user.email} />
        ))}
      </main>
    </>
  );
}
