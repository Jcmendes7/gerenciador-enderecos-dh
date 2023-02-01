
import "./global.css";
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Router";

export function App() {
  return (
    <main>
      <BrowserRouter>
      
      <Router />
      </BrowserRouter>
    </main>
  );
}
