import React from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { AddressForm } from "./pages/AddressForm";
import { UserAddress } from "./pages/UserAddress";
import { UserRegistrationForm } from "./pages/UserRegistrationForm";
import { UsersPage } from "./pages/UsersPage";
import { Login } from "./pages/Login";
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/register" element={<UserRegistrationForm />} />

        <Route path="/address" element={<UserAddress />} />
        <Route path="/address/register" element={<AddressForm />} />

        <Route path="/" element={<Login />} />
      </Route>
    </Routes>
  );
}
