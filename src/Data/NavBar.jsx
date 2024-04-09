import { useState } from "react"
import { Link } from "react-router-dom";

const NavBar = () => {
    const [activeTab, setActiveTab] = useState("/")

 const handleTab = (click) =>{
    setActiveTab(tab);
 };
 return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link
        to={'/'}
        className={`navbar-brand ps-4 ${activeTab === '/' ? "active" : ""}`}
        onClick={() => handleTab("/")}
      ></Link>
      <button
      className="btn"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
      >
        <span className="nav-icon"></span>
      </button>
      <div 
      className="collapse navbar-collapse justify-content-lg-center pe-lg-5 me-lg-5"
      id="navbarNavAltMarkup">
        <div className="nav">
            <Link
             to={'/All'}
             className={`nav-link ${activeTab === "/" ? "active" : ""}`}
             onClick={() => handleTab("/")}
            > All
            </Link>
           
            <Link
             to={'/fullstack'}
             className={`nav-link ${activeTab === "/fsd" ? "active" : ""}`}
             onClick={() => handleTab("/fsd")}
            > FullStack Development
            </Link>
            
            <Link
             to={'/datascience'}
             className={`nav-link ${activeTab === "/datascience" ? "active" : ""}`}
             onClick={() => handleTab("/datascience")}
            > DataScience
            </Link>
            
            <Link
             to={'/Cyber'}
             className={`nav-link ${activeTab === "/cybersecurity" ? "active" : ""}`}
             onClick={() => handleTab("/cybersecurity")}
            >Cyber
            </Link>
            
            <Link
             to={'/Carrer'}
             className={`nav-link ${activeTab === "/carrer" ? "active" : ""}`}
             onClick={() => handleTab("/Carrer")}
            > Carrer
            </Link>

         </div>
       </div>
      </div>
    </nav>
 )
}
export default NavBar;