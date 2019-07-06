import Layout from '../components/Layout';
import './normalize.css';

export default function Index(){
    return(     
    <Layout title="Home">
    
        <section className="navigation display">
            <h3>Contact Us</h3>
            <span className="close display">CLOSE</span>

        <div className="row">
            <div className="contact-form">
                <h4>If you have any issues or query,<br/>
                    please feel free to contact us.</h4>
                    <span>+91 98193 12512</span>
                    <span>info@graphicsinnovation.in</span>
                <form action="/" method="post">
                    <input type="text" placeholder="Enter Your Full Name"></input>
                    <input type="email" placeholder="Enter Your Email"></input>
                    <input type="text" placeholder="Enter Your Number"></input>
                    <input type="text" placeholder="Write Your Message"></input>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="95%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Office%20No.%2016%2C%20A%2F343%2C%20%201st%20Floor%20Badam%20Wadi%2C%20Kalbadevi%20Main%20Road%2CMaharashtra%20400002&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
            </div>
        </div>
        </section>
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
          <input type="text" placeholder="Enter Your Name"></input>
          <input type="email" placeholder="Enter Your Email"></input>
          <input type="mobile" placeholder="Enter Your Mobile No"></input>
          <button type="submit">Enquire Now!</button>
      </form>
    </div>
    </Layout>
    );
  }
  
