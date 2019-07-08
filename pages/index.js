import Layout from '../components/Layout';
import './normalize.css';
import Head from 'next/head';


export default function Index(){
    return(     
    <Layout>
        <Head>
            <title>Graphics Innovation </title>
            </Head>
    <section id='hero'>
      <div className="row">
      <div className="hero-heading">
      <h1>Become A Certified Professional Graphic Designer </h1>
      </div>
      <div className="hero-contact">
        <div className="hero-contact-form">
          <h4> Instant Enquire </h4>
          <span><p> Call Now : +91 98193 12512 <br/><br/>Or</p></span>
          
          <form action="https://formspree.io/info@graphicsinnovation.in" method="post">
              <input name="name" type="email" placeholder="Enter Your Name"></input>
              <input name="email" type="text" placeholder="Enter Your Email"></input>
              <input name="number" type="number" min="10" max="10" placeholder="Enter Your Mobile No"></input>
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
      <ul>
        <img src="/static/adobe-photoshop.svg" alt="photoshop"></img>
        <img src="/static/adobe-illustrator.svg" alt="photoshop"></img>
        <img src="/static/adobe-indesign.svg" alt="photoshop"></img>
        <img src="/static/coreldraw.svg" alt="photoshop"></img>
      </ul>
      </div>
        <div className="software-right">
        <h2>
          Become A Master In Graphic Design <br/>
          With Skills In The Best Tools
        </h2>
        <h4>Build skills in the world of graphics & visual design.</h4>
        <ul>
          <li>UI Design</li>
          <li>Photo Editing</li>
          <li> Infographics</li>
          <li>Digital Painting</li>
          <li>Wireframe</li>
          <li>Web Graphics</li>
        </ul>
        </div>
      </div>
    </section>
    <div className="row" id="download">
      <h4> See Our Complete Curriculum. Download The Course Book. </h4>          
      <button>Download Now!</button>
    </div>
    <section id="career">
    <h4>Career Prospects</h4>
      <div className="row">
      <ul>
      <li>UI Designer</li>
      <li>UX Specialist</li>
      <li>Advertising Art Director</li>
      <li>Advertising Designer</li>
      <li>Digital Illustrator</li>
      <li>Visualizer</li>
      <li>Multimedia Specialist</li>
      <li>Layout Artist</li>
      </ul>
      </div>
    </section>
    <div className="row" id="footer-cta">
      <h4> Instant Enquire </h4>
      <form action="/" method="post">
          <input name="name" type="text" placeholder="Enter Your Name"></input>
          <input name="email" type="email" placeholder="Enter Your Email"></input>
          <input name="number" type="number" min="10" max="10" placeholder="Enter Your Mobile No"></input>
          <button type="submit">Enquire Now!</button>
      </form>
    </div>
    </Layout>
    );
  }
  
