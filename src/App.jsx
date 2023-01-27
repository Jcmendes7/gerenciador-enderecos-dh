import { Header } from "./components/Header/Header"
import { Home } from "./pages/Home/Home"
import { UsersPage } from "./pages/UsersPage"
import './global.css'
import { UserAddress } from "./pages/UserAddress"

export function App() {
  return (
    <main>
      <Header />
      <Home />
      {/* < UsersPage /> */}
      {/* <UserAddress /> */}
    </main>
  )
}
