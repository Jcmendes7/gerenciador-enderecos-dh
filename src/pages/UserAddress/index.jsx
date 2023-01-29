import styles from "./UserAddress.module.css";

import { AddressCard } from "../../components/AddressCard";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer";
export function UserAddress() {
  const listAddress = [
    {
      id: 1,
      street: "Jose Sanches Garcia",
      district: "Recanto dos Passaros",
      city: "Birigui",
      state: "SP",
      house_number: "302",
      fk_user: 1,
    },
    {
      id: 2,
      street: "Dr Carlos carvalho rosa",
      district: "Vila Brasil",
      city: "Birigui",
      state: "SP",
      house_number: "489",
      fk_user: 2,
    },
    {
      id: 3,
      street: "9 de julho",
      district: "Centro",
      city: "Birigui",
      state: "SP",
      house_number: "698",
      fk_user: 3,
    },
  ];

  return (
    <>
      <Header title="pagina de endereços" />
      <main className={styles.mainAddress}>
        {listAddress.map((user) => (
          <AddressCard
            id={user.id}
            street={user.street}
            district={user.district}
            city={user.city}
            state={user.state}
            house_number={user.house_number}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}
