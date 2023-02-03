import styles from './AddressForm.module.css'
import { api } from '../../services/api'
import { useState } from "react";

export function AddressForm() {
  const [street, setStreet] = useState()
  const [district, setDistrict] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [house_number, setHouse_number] = useState()
  const [id, setId] = useState()

  async function handleSubmit(event) {
    event.preventDefault();

    await api.post("address/create", {
      street,
      district,
      city,
      state,
      house_number,
      fk_user: id
    })


    setStreet("");
    setDistrict("");
    setCity("");
    setHouse_number("");
    setState("");
    setId("")

    alert("Cadastro realizado")
  }

  return (
    <>
      <main className={styles.mainAddressForm}>
        <form onSubmit={handleSubmit} action="" method="post">
          <h1>Cadastro de endereço</h1>

          <div className={styles.inputsGroup}>

            <div className={styles.inputBox}>
              <label htmlFor="street">Rua</label>
              <input
                type="text"
                id="street"
                value={street}
                onChange={(event) => setStreet(event.target.value)}
                placeholder="nome da rua"
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="district">Bairro</label>
              <input
                type="text"
                id="district"
                value={district}
                onChange={(event) => setDistrict(event.target.value)}
                placeholder="nome do bairro"
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                placeholder="nome da cidade"
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="state">Estado</label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={(event) => setState(event.target.value)}
                placeholder="estado"
              />
            </div>

            <div className={styles.inputBox}>
              <label htmlFor="house_number">Número da Casa</label>
              <input
                type="text"
                id="house_number"
                value={house_number}
                onChange={(event) => setHouse_number(event.target.value)}
                placeholder="Digite o Número da casa"
              />
            </div>

            <div className={styles.inputBoxId}>
              <label htmlFor="fk_user">ID do Usuário</label>
              <input
                type="text"
                id="fk_user"
                value={id}
                onChange={(event) => setId(event.target.value)}
                placeholder="ID Usuário"
              />
            </div>

          </div>

          <button className={styles.btnSubmitAddress} type="submit">Cadastrar</button>
        </form>
      </main>
    </>
  )
}