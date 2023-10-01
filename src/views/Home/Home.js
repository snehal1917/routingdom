import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import "./Home.css";
export default function Home() 
{
    return(
        <div className=" home-container">
            <Navbar/>
            <h1> Home </h1>
            <p>
                This is the Home page.It is a react component as a view.
            </p>
            <Footer/>
        </div>
    );
}