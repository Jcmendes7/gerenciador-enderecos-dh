import { UserRegistrationForm } from "./pages/UserRegistrationForm";
import { UsersPage } from "./pages/UsersPage";
import "./global.css";
import { UserAddress } from "./pages/UserAddress";
import { AddressForm } from "./pages/AddressForm";

export function App() {
  return (
    <main>
      {/* <UserRegistrationForm /> */}
      {/* <AddressForm /> */}
      {/* < UsersPage /> */}
      <UserAddress />
    </main>
  );
}
