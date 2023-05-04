import React from "react";
import Nav from "./share/Navbar/Nav";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./share/Footer/Footer";
import Loading from "./Loading/Loading";

const App = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  return (
    <>
      <Nav></Nav>
      <div className="min-h-[calc(100vh-390px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
