import { Play } from "phosphor-react";
import styles from "./UserRegistrationForm.module.css";
export function UserRegistrationForm() {

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleOnChange(event) {
  
  }
  
  return (
    <div className={styles.userRegisterContainer}>

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
            <input type="text" id="email" placeholder="Digite seu email" />
          </div>

          <div className={styles.inputsBox}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite uma senha"
            />
          </div>

          <button className={styles.btnForm} type="submit">
            <Play size={25}/>
            Cadastrar
          </button>

        </div>
      </form>
    </div>
  );
}
