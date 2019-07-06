import Link from 'next/link';

  const Layout = (props) => (
      <main>
      <header>
        <a href="/"><img className="logo" src="/static/logo.svg" alt="graphics-innovation"></img></a>
        <ul>
        <li><span className="top-email">info@graphicsinnovation.in</span></li>
        <li><Link><a href="./" className="menu menu-home display">HOME</a></Link></li>
        <li><Link><a href="./contact" className="menu menu-contact-us">CONTACT US</a></Link></li>
        </ul>
      </header>
      {props.children}
      <footer>
      <section id="contact">
      <div className="row">
      <div className="contact">
          <h4>Contacts</h4>
          <ul>
          <span><img className="contact-icon" src="/static/phone-call.svg" alt="graphic-innovation-phone-number"></img>+91 98193 12512</span>
          <br/>
          <br/>
          <span><img className="contact-icon" src="/static/message.svg" alt="graphic-innovation-phone-number"></img>info@graphicsinnovation.in</span>
              
          </ul>
        </div>
        <div className="contact">
          <h4>REACH US</h4>
        <address>
        Graphics Innovation<br/>
        Office No. 16, A/343, <br/>
        1st Floor Badam Wadi, Kalbadevi Main Road Opp. <br/>
        Krishna Murali Hotel, Next to Vivo Showroom, <br/>
        Maharashtra 400002
        </address>
        </div>
        <div className="contact">
        <h4>SUBSCRIBE US</h4>
        <p>Subscribe us for recieve latest <br/> Updates News and Offers.</p>

          <form action="/" method ="post">
            <input type="email" placeholder="Enter Your Email"></input>
            <button type="submit">subscribe</button>
          </form>
        </div>
        </div>
    </section>
        <div className="footer-bottom">  
          <span>&copy; <a href="http://www.graphicsinnovation.com/">Graphics Innovation</a></span>
        </div>
      </footer>

      </main>
  );
  
  export default Layout;