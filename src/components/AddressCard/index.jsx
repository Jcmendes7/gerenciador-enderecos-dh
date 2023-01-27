import styles from './AddressCard.module.css'
export function AddressCard({
  id,
  street,
  district,
  city,
  state,
  house_number,
  fk_user,
}) {
  return (
    <div className={styles.addressCardContainer}>
      <span>Id: {id}</span>
      <span>Rua: {street}</span>
      <span>Bairro: {district}</span>
      <span>Cidade: {city}</span>
      <span>Estado: {state}</span>
      <span>Número da casa: {house_number}</span>
    </div>
  );
}
