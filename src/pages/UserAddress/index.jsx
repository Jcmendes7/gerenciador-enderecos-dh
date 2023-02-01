import styles from "./UserAddress.module.css";

import { AddressCard } from "../../components/AddressCard";

import { useState, useEffect } from "react";
import { api } from "../../services/api";
export function UserAddress() {
  const [ listAddress, setListAddress] = useState([]);
  
  useEffect(() => {
    async function getAllAddress() {
      const response = await api.get("/address/users")
      setListAddress(response.data)
    }

    getAllAddress();
  }, [])

  return (
    <>
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
    </>
  );
}
