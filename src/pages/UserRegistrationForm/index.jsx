import {
  EnvelopeSimple,
  LockSimple,
  Play,
  User,
} from "phosphor-react";

import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'


import { Icon } from 'react-icons-kit'
import { useState } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header/Header";

import styles from "./UserRegistrationForm.module.css";

export function UserRegistrationForm() {
  const [ type, setType] = useState('password');
  const [ iconEye, setIconEye ] = useState(eyeOff)
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleOnChange(event) {}

  function handleOnClickEye() {
    if(type === "password") {
      setIconEye(eye);
      setType('text')
    } else {
      setIconEye(eyeOff)
      setType('password')
    }
  }

  return (
    <>
      <Header title="Cadastro de Usuário" />
      <div className={styles.userRegisterContainer}>
        <form onSubmit={handleSubmit} action="" method="post">
          <div className={styles.formContainer}>
            <h1>Faça seu Cadastro</h1>

            <div className={styles.inputsBox}>
              <label htmlFor="name">Nome Completo</label>
              <div className={styles.input}>
                <span>
                  <User size={24} />
                </span>

                <input
                  type="text"
                  id="name"
                  placeholder="Digite seu nome"
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div className={styles.inputsBox}>
              <label htmlFor="email">E-mail</label>
              <div className={styles.input}>
                <span>
                  <EnvelopeSimple size={24} />
                </span>
                <input type="text" id="email" placeholder="Digite seu email" />
              </div>
            </div>

            <div className={styles.inputsBox}>
              <label htmlFor="password">Senha</label>
              <div className={styles.input}>
                <span>
                  <LockSimple size={24} />{" "}
                </span>
                <input
                  type={type}
                  id="password"
                  placeholder="Digite uma senha"
                />
                <a onClick={handleOnClickEye}>
                  <Icon icon={iconEye} size={18} />
                </a>
              </div>
            </div>

            <div className={styles.termosPrivacidade}>
              Ao se registrar,você concorda com nossos
              <a href="">termos de uso</a> e a nossa
              <a href="">política de Privacidade</a>
            </div>

            <button className={styles.btnForm} type="submit">
              <Play size={25} />
              Cadastrar
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
