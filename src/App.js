import { Fragment } from "react";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import Home from "./pages/home-page";

function App() {
  return (
    <Fragment>
      <Navbar/>
        <Home></Home>
      <Footer/>
    </Fragment>
  );
}

export default App;
