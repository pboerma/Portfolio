import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
   return (
    <div className="App">
    

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
<br></br>
<br></br>
<hr></hr>
<div className="container">
<div className="row align-items-center">
    <div className="col-sm-5 col-lg-2">
        <div className="header-content-right">
            <h4 className="sub-title">Hello, I’m</h4>
            <h1 className="title">Pieter Boerma</h1>
            <a className="main-btn" href="#work">View my Work</a>
        </div> 
    </div>
    <div className="col-lg-6 offset-xl-1">
        <div className="header-image d-none d-lg-block">
            <img src="my-app/public/assets/PietB.jpg" alt="hero"/>
</div> 
</div> 
</div>



<br></br>
<hr></hr>
<br></br>



<section id="about" className="about-area pt-125 pb-130"></section>
<div className="container">
<div className="row">
  <div className="col-md-12">
    <div className="section-title text-center pb-25">
        <h2 className="title">About Me</h2>
    </div> 
  </div>
</div>
<div className="row">
    
    <div className="col-md-12">
      
        <p>
          What's up!?
        

          Thanks for checking out my peronsalized page. My name is Pieter Boerma. I am a Kenyan-born, Dutch Citizen living in Canada. I am currently working as a Sales consultant for a start-up while studying full stack web development at the University of Toronto. 
          </p>
          <p>I enjoy playing and watching sports and balancing that with lots of Netflix. I have a crazy labrador retriever called Odie who is keeping me busy throughout the pandemic. Please have a look at my site and let me know what you think! Check out my portfolio with some projects I've worked on - Work in progress!
        </p>
    </div>
  </div>
</div>

<hr></hr>

<section id="work" className="work-area pt-125 pb-130">
  <div className="container">
      <div className="row">
          <div className="col-md-12">
              <div className="section-title text-center pb-25">
                  <h2 className="title">Portfolio</h2>
                  <p>As I work through Coding Bootcamp, I'd like to share some of my projects with you. Below is a a list of projects I've built along my journey of familiarizing and practicing building web applications!</p>
              </div> 
          </div>
      </div> 
  <div className="row">
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="single-work text-center mt-30">
          <div className="work-image">
              <img src="assets/Homepage.PNG" alt="Snow Removal Mgm"/>
          </div>
<br></br>
            <ul>
              <a href="https://snowmanagement.herokuapp.com/" className="main-btn" role="button" aria-pressed="true">Snow Removal Mgmt</a>
              <a href="https://github.com/omair-muhi/snow-removal-mgmt" className="main-btn" role="button" aria-pressed="true">Repository</a>
            </ul>

        </div>
      </div>
    </div>
<div className="col-lg-4 col-md-6 col-sm-6">
    <div className="single-work text-center mt-30">
      <div className="work-image">
            <img src="assets/PP.JPG" alt="Perfect Pairings"/>
      </div>
<br></br>
        <ul>
          <a href="https://nagck.github.io/perfectpairings/" className="main-btn" role="button" aria-pressed="true">Perfect Pairing</a> 
          <a href="https://github.com/nagck/perfectpairings" className="main-btn" role="button" aria-pressed="true">Repository</a>
                <li> Username: Admin</li>
                <li> Password: Apostol99</li>   
        </ul>              
    </div>
  </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-work text-center mt-30">
                  <div className="work-image">
                      <img src="assets/Notetaker.png" alt="Note Taker"/>
                  </div>
                  <br></br>
                  <ul>
                      <a href="https://github.com/pboerma/noteTaker" className="main-btn" role="button" aria-pressed="true">Repository</a>
                  </ul>

  <br></br>       
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-work text-center mt-30">
                  <div className="work-image">
                      <img src="assets/PW.JPG" alt="Password Generator"/>
                  </div>
                  <br></br>
                  <ul>
                      <a href="https://pboerma.github.io/JavascriptPWgenerator/" className="main-btn" role="button" aria-pressed="true">PW Generator</a>
                      <a href="https://github.com/pboerma/JavascriptPWgenerator" className="main-btn" role="button" aria-pressed="true">Repository</a>
                    </ul>
      
              </div> 
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-work text-center mt-30">
                  <div className="work-image">
                      <img src="assets/webquiz.JPG" alt="Web Quiz"/>
                  </div>
                  <br></br>
                  <ul>
                      <a href="https://pboerma.github.io/WebQuiz/" className="main-btn" role="button" aria-pressed="true">WebQuiz</a>
                      <a href="https://github.com/pboerma/WebQuiz" className="main-btn" role="button" aria-pressed="true">Repository</a>  
                    </ul>
                  
              </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-work text-center mt-30">
                  <div className="work-image">
                      <img src="assets/Workoutdashboard.png" alt="work"/>
                  </div>
                  <br></br>
                        <ul>
                            <a href="https://workouttrackermongo.herokuapp.com/" className="main-btn" role="button" aria-pressed="true">WorkOut Tracker</a>
                            <a href="https://github.com/pboerma/workoutTracker" className="main-btn" role="button" aria-pressed="true">Repository</a>
                        </ul>
                      </div>
                  </div>
              </div> 
          </div>
          </section>
      </div> 


    
 



<br></br>
<hr></hr>
<br></br>


<section id="contact" className="contact-area pt-125 pb-130 gray-bg"/>
  <div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-8">
            <div className="section-title text-center pb-25">
                <h2 className="title">Get In Touch</h2>
            </div> 
        </div>
    </div> 
    <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="contact-box text-center mt-30">
                <div className="contact-icon">
                    <i className="lni-map-marker"></i>
                </div>
                <div className="contact-content">
                    <h6 className="contact-title">Address</h6>
                    <p>Toronto, CANADA</p>
                </div>
            </div> 
        </div>
        <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="contact-box text-center mt-30">
                <div className="contact-icon">
                    <i className="lni-phone"></i>
                </div>
                <div className="contact-content">
                    <h6 className="contact-title">Phone</h6>
                    <p>+1 647-462-3125</p>
                </div>
            </div> 
        </div>
        <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="contact-box text-center mt-30">
                <div className="contact-icon">
                    <i className="lni-envelope"></i>
                </div>
                <div className="contact-content">
                    <h6 className="contact-title">Email</h6>
                    <p> boerma.pieter@gmail.com</p>
                </div>
            </div> 
        </div>
    </div> 
   

            
          
    <footer id="footer fixed-bottom" className="footer-area"/>
      <div className="footer-widget pt-75 pb-75">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-sm-12">
                      <div className="footer-content text-center">
                          <ul>
                              <li><a href="https://www.instagram.com/pboerma/?hl=en"><i className="fa fa-instagram"></i></a></li>
                              <li><a href="https://github.com/pboerma"><i className="fa fa-Github"></i></a></li>
                              <li><a href="https://drive.google.com/file/d/17191uGHb5l7OhoirPnvi4AF_2s_1jVc0/view?usp=sharing"><i className="fa fa-resume"></i></a></li>
                              <li><a href="https://linkedin.com/in/pboerma"><i className="fa fa-linkedin"></i></a></li>
                          </ul>
                      </div> 
             
          </div>
      </div> 
      </div>
  

      


</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

</div>
</div>


    

  );
}

export default App;
