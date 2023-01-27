import { AddressCard } from "../../components/AddressCard";
export function UserAddress() {
  const listAddress = [
    {
      id: 1,
      street: "Rua Jose Sanches Garcia",
      district: "Recanto dos Passaros",
      city: "Birigui",
      state: "SP",
      house_number: "302",
      fk_user: 1
    },
    {
      id: 2,
      street: "Rua Jose Sanches Garcia",
      district: "Recanto dos Passaros",
      city: "Birigui",
      state: "SP",
      house_number: "302",
      fk_user: 2
    },
    {
      id: 3,
      street: "Rua Jose Sanches Garcia",
      district: "Recanto dos Passaros",
      city: "Birigui",
      state: "SP",
      house_number: "302",
      fk_user: 3
    },
  ];

  return (
    <>
      <main>
      {listAddress.map((user) => (
          <AddressCard 
            id ={user.id}
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
