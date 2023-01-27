export function AddressCard({id, street, district, city, state, house_number, fk_user }) {
  return (
    <div>
      <span>Id: {id}</span>
      <span>Street: {street}</span>
      <span>District: {district}</span>
      <span>City: {city}</span>
      <span>State: {state}</span>
      <span>House Number: {house_number}</span>
    </div>
  )
}