import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "./Header";
import "../../index.css";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
export default Admin;
