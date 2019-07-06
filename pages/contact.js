import Layout from '../components/Layout';


export default function Index(){
    return(
        <Layout title="Home">
        <section id="contact-page">
        
        <div className="row">
        
            <div className="contact-form">
            <div className="page-heading">
            <h3>Contact Us</h3>
        </div>
                <h4>If you have any issues or query,
                    please feel free to contact us.</h4>
                    <span><img className="contact-icon" src="/static/phone-call.svg" alt="graphic-innovation-phone-number"></img>+91 98193 12512</span>
                    <span><img className="contact-icon" src="/static/message.svg" alt="graphic-innovation-phone-number"></img>info@graphicsinnovation.in</span>
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
                    <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Office%20No.%2016%2C%20A%2F343%2C%20%201st%20Floor%20Badam%20Wadi%2C%20Kalbadevi%20Main%20Road%2CMaharashtra%20400002&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
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
    )}