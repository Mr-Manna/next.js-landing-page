import Layout from '../components/Layout';
import './style.css';                 
import './main.css';                 

export default function Index(){
    return(     
    <Layout title="Home">
    <section id='hero'>
      <div className="row">
      <div className="hero-heading">
      <h1>Become A Certified Professional Graphic Designer </h1>
      </div>
      <div className="hero-contact">
        <div className="hero-contact-form">
          <h4> Instant Enquire </h4>
          <span>+91 98193 12512</span>
          <form action="/" method="post">
              <input type="text" placeholder="Enter Your Name"></input>
              <input type="email" placeholder="Enter Your Email"></input>
              <input type="mobile" placeholder="Enter Your Mobile No"></input>
              <button type="submit">Enquire Now!</button>
          </form>
        </div>
      </div>
    </div>
    </section>
    <section id="overview">
      <div className="row">
        <div className="overview-left">
          <h2>Advance Diploma in Graphic Design</h2>
        </div>
        <div className="overview-right">
        <p>
        Graphic Designing is a very important course and in demand.
        It is practically used for all image editing requirements. 
        It is software’s like Photoshop which combine technology & creativity to create Websites, Brochure Designs, Advertisements, Magazines, Photo-touch ups, Packaging, Hoardings, Project Presentations . . .etc.
        </p>
        </div>
      </div>
    </section>
    <section id="softwares">
      <div className="row">
      <div className="software-left">
     <img src="/static/photoshop.svg" alt="photoshop"></img>
    <img src="/static/illustrator.svg" alt="photoshop"></img><br/>
    <img src="/static/indesign.svg" alt="photoshop"></img>
    <img src="/static/coreldraw.jpg" alt="photoshop"></img>
     </div>
        <div className="software-right">
        <h2>
      Become A Master In Graphic Design <br/>
      With Skills In The Best Tools
    </h2>
        </div>
      </div>
    </section>
    <div className="row" id="footer-cta">
      <h4> Instant Enquire </h4>
      <form action="/" method="post">
          <input type="text" placeholder="Enter Your Name"></input>
          <input type="email" placeholder="Enter Your Email"></input>
          <input type="mobile" placeholder="Enter Your Mobile No"></input>
          <button type="submit">Enquire Now!</button>
      </form>
    </div>

    </Layout>
    );
  }
  
