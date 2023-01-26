import styles from "./Home.module.css";
export function Home() {

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleOnChange(event) {
  }
  
  return (
    <div className={styles.homeContainer}>

      <form onSubmit={handleSubmit} action="" method="post">
        <div className={styles.formContainer}>
          <h1>Faça seu Cadastro</h1>

          <div className={styles.inputsBox}>
            <label htmlFor="name">Nome Completo</label>
            <input
              type="text"
              id="name"
              placeholder="Digite seu nome"
              onChange={handleOnChange}
            />
          </div>

          <div className={styles.inputsBox}>
            <label htmlFor="email">E-mail</label>
            <input type="text" id="email" placeholder="Digite seu nome" />
          </div>

          <div className={styles.inputsBox}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite seu nome"
            />
          </div>

          <button className={styles.btnForm} type="submit">
            Cadastrar
          </button>

        </div>
      </form>
    </div>
  );
}
