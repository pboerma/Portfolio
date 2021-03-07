import React from "react";

function Navbar() {
    return (
        
        <div className="navigation fixed-top">
<div className="container">
    <div className="row">
        <div className="col-lg-1">
            <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a className="page-scroll" href="#home">Home</a></li>
                        <li className="nav-item"><a className="page-scroll" href="#about">About</a></li>
                        <li className="nav-item"><a className="page-scroll" href="#work">Portfolio</a></li>
                        <li className="nav-item"><a className="page-scroll" href="#contact">Contact</a></li>
                    </ul>
                </div> 
            </nav> 
        </div>
    </div> 
</div> 
</div> 

    );
}

export default Navbar;


