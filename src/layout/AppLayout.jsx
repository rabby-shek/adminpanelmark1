import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/app/Header";
const AppLayout = () => {
  return (
    <>
      <Header />
      <main style={{ marginTop: 58 }}>
        <div className="container pt-3" />
        <div className="container-fluid">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default AppLayout;
