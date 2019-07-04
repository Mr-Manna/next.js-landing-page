import Link from 'next/link';

  const Layout = (props) => (
      <main>
      <header>
        <nav className="navigation display"> 
        <ul>
          <li><Link href="index"><a>Home</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/blog"><a>Blogs</a></Link></li>
          <li><Link href="/test"><a>Contact</a></Link></li>
        </ul>
        </nav>
        <span className="menu">MENU</span>
        <span className="close display">CLOSE</span>
      </header>
      {props.children}
      <footer>
      <section id="contact">
      <div className="row">
      <div className="contact">
          <h4>LINKS</h4>
          <ul>
            <li>Home</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Corel Draw</li>
            <li>Indesign</li>
            <li>Contact</li>
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