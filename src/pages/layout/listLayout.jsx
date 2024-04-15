
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";

export const ListLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
