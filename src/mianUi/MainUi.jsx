import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const MainUi = () => {
    return (
        <div>
          <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainUi;