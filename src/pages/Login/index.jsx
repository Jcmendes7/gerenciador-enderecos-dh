import { EnvelopeSimple, LockSimple } from "phosphor-react";
import styles from "./Login.module.css";
import { useState } from "react";
import { NavLink } from 'react-router-dom'
export function Login() {
  const [ email, setEmail ] = useState()
  const [ password, setPassword] = useState()

  function handleSubmit(event) {
    event.preventDefault()
    console.log(email, password)
  }


  return (
    <div className={styles.loginContainer}>
      <div className={styles.titleLogin}>
        <div className={styles.logoLogin}>LOGO</div>
        <h1>Faça seu Login agora mesmo</h1>
      </div>
      <main className={styles.mainContainer}>
        <form onSubmit={handleSubmit} action="" method="post">
          <div className={styles.inputsContainer}>
            <div className={styles.inputBox}>

              {/* <label htmlFor="email">E-Mail</label> */}
              <div className={styles.input}>
                <span>
                  <EnvelopeSimple size={24} />
                </span>
                <input 
                  type="text" 
                  id="email" 
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

            </div>

            <div className={styles.inputBox}>
              {/* <label htmlFor="password">Senha</label> */}
              <div className={styles.input}>
                <span> <LockSimple size={24} /> </span>
                <input 
                  type="password" 
                  id="password"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
              <NavLink className={styles.passwordForgot} to="">esqueci a senha</NavLink>
            <button className={styles.btnLogin} type="submit">Login</button>

            <span className={styles.createAccountLogin}>
              Ainda não tem um conta? <NavLink to="/users/register">Crie a sua conta</NavLink>
            </span>

            <div className={styles.divDecorationLogin}></div>
            <div className={styles.enterWithContainer}>
              <div>Ou entre com</div>
              <a href="">GITHUB</a>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
