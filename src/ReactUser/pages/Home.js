import { useState } from 'react';
import Typewriter from 'typewriter-effect'



const Home = () =>{

const [state] = useState({
    title:'Hi',
});
return (
    <div className="container">
   
<section id="hero" class="d-flex flex-column justify-content-center m-2 py-1" >
    <div class="text" data-aos="zoom-in" data-aos-delay="100">
      <h1 >Hemleen Francis</h1>
      
     <h1 className="text">
       <div className="title">{state.title}</div>
       </h1>
        <div className='text'>
         <Typewriter
             options = {
                 {
                     autoStart: true,
                     loop:true,
                     delay:40,
                     strings:[
                         "I'm Web Developer",
                         "I'm Web FreeLancer",
                         "I'm Web Graphic Designer"

                     ]
                 }
             }
         />
        </div>
        </div>
        </section>
        <section id="about" class="about">
      <div class="container" data-aos="fade-up " >

        <div class="section-title">
          <h2>About</h2>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <div>
              <img src="./images/bg.png" alt=""  width="100%" height="50%"/>
            </div>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>UI/UX Designer &amp; Full Stack Web Developer.</h3>
            <p class="fst-italic">
            A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>06 June 1996</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>*****</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 9629817352</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Coimbatore,Tamilnadu, India</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bsc, Information technology</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>Hemleen7@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>

      </div>
    </section>
    <section id="facts" class="facts">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Facts</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="count-box">
            <i class="fa-solid fa-face-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
              <p>Happy Clients</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div class="count-box">
            <i class="fa-solid fa-book"></i>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
              <p>Projects</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div class="count-box">
            <i class="fa-solid fa-paper-plane"></i>
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" class="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div class="count-box">
            <i class="fa-solid fa-badge-dollar"></i>
              <span data-purecounter-start="0" data-purecounter-end="25" data-purecounter-duration="1" class="purecounter"></span>
              <p>Awards</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Skills</h2>
          <p></p>
        </div>

        <div class="row skills-content">

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill">HTML5 <i class="val">100%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">CSS3 <i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">JavaScript <i class="val">75%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div class="col-lg-6">

            <div class="progress">
              <span class="skill">React js <i class="val">80%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">jQuery<i class="val">90%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div class="progress">
              <span class="skill">Photoshop <i class="val">55%</i></span>
              <div class="progress-bar-wrap">
                <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
    <footer id="footer">
    <div class="container">
      <h3>Hemleen Francis</h3>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      <div class="social-links">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
      <div class="copyright">
        &copy; Copyright-2022 <strong><span>H7 Site</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        
        Designed by <h4>Visual Code Editor</h4>
      </div>
    </div>
  </footer>
</div>

  );
};


export default Home;