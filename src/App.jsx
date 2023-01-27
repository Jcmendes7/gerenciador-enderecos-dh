import { Header } from "./components/Header/Header"
import { UserRegistrationForm } from "./pages/UserRegistrationForm"
import { UsersPage } from "./pages/UsersPage"
import './global.css'
import { UserAddress } from "./pages/UserAddress"

export function App() {
  return (
    <main>
      <Header />
      <UserRegistrationForm />
      {/* < UsersPage /> */}
      {/* <UserAddress /> */}
    </main>
  )
}
