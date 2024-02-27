import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
import logo from './images/logo.webp'

const Buy = () => {

  // Responsive Navbar

  const [isActive, setIsActive] = React.useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-contact");

    const observerCallback = (entries) => {
      const ent = entries[0];
      !ent.isIntersecting ?
        document.body.classList.add("sticky") :
        document.body.classList.remove("sticky");
    };

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-100px",
    };

    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(sectionHero);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Scroll Top

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Match select option

  const [selectcategory, setSelectCategory] = React.useState('selectcategory');
  const option1 = ['PS4 CyberSprint','PS4 ProCommand','PS4 TacticalPulse','PS5 EliteNavigator','PS5 ReactorGrip','PS5 InfinityEdge'];
  const option2 = ['QuantumStrike Pro','ThunderFire Elite','HyperFury Spectrum'];
  const option3 = ['VenomSwift Pro','EclipsePulse','NovaGlide'];

  const update = (e) => {
    const selectcategory = e.target.value;
    setSelectCategory(selectcategory);
  };

  return (
    <>

      {/* Header Section */}

      <header className={`header ${isActive ? 'active' : ''}`}>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>Emulator In</h2>
        </div>
        <nav className="navbar">
          <ul>
            <li><a className='navlink' href="/">Home</a></li>
            <li><NavLink className='navlink' to={'/product'}>Product</NavLink></li>
            <li><NavLink className='navlink' to={'/other'}>Other</NavLink></li>
          </ul>
        </nav>

        <div className="mobile-navbar-btn" onClick={toggleNavbar}>
          <i name="ham" className={`fa-solid fa-bars mobile-nav-icon`}></i>
          <i name="cross" className={`fa-solid fa-xmark mobile-nav-icon`}></i>
        </div>
        
      </header>

      {/* <!-- Order Section --> */}

      <section className="section section-contact">
        <div className="container">
          <h2 className="common-heading">Buy Now&nbsp; <i className="fa-brands fa-opencart"></i></h2>
        </div>

        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.58771735367!2d77.93473398378957!3d30.3255508049571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1707394666507!5m2!1sen!2sin" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className="section-contact-main contact-container">
          <form action="https://formspree.io/f/xdoqevwj" method="POST">
            <div className="grid grid-two-columns">
              <input id="name" name="Name" type="text" placeholder="Name 👤" required autocomplete="off"/>
              <input id="email" name="Email" type="email" placeholder="Email 📧" required autocomplete="off"/>
            </div>
            <div>
              <input type="number" name="Phone" id="phone" placeholder="Phone 📱" required autocomplete="off"/>
            </div>
            <div>
              <input id="subject" name="subject" type="text" placeholder="Subject 🔦" required autocomplete="off"/>
            </div>
            <div>
              <select name="Category Type" id="select1" onChange={update} value={selectcategory} required>
                <option value="selectcategory">Select Category</option>
                <option value="emulator">Gaming Emulator 🎮</option>
                <option value="keyboard">Gaming Keyboard ⌨️</option>
                <option value="mouse">Gaming Mouse 🖱️</option>
              </select>
            </div>
            <div>
              <select name="Emulator Type" id="select2" required>
                {selectcategory === 'selectcategory' && <option value="choose">Choose Category First</option>}
                {selectcategory === 'emulator' && option1.map((optiontext,index) => (
                  <option key={index} value={optiontext}>{optiontext}</option>
                ))}
                {selectcategory === 'keyboard' && option2.map((optiontext,index) => (
                  <option key={index} value={optiontext}>{optiontext}</option>
                ))}
                {selectcategory === 'mouse' && option3.map((optiontext,index) => (
                  <option key={index} value={optiontext}>{optiontext}</option>
                ))}
              </select>
            </div>
            <div>
              <textarea name="address" id="address" cols="30" rows="5" placeholder='Your Valid Address 🏠' required autocomplete="off"></textarea>
            </div>
            <div>
              <textarea id="message" name="message" cols="30" rows="5" placeholder="Give your feedback ✔️" required autocomplete="off"></textarea>
            </div>
            <div>
              <input id="submit" name="submit" type="submit" className="btn" value="Order Now 🛒"/>
            </div>
          </form>
        </div>
      </section>

    {/* <!-- Footer Section --> */}

    <footer className="section section-footer">
        <div className="container grid grid-three-columns">
            <div className="f-about">
                <h3>About</h3>
                <p>Emulator In offers a vast selection of high-quality gaming controllers, ensuring precision, comfort, and seamless gameplay for passionate online gamers worldwide.</p>
            </div>
            <div className="f-links">
                <h3>Links</h3>
                <ul>
                    <li><NavLink to={"/"}><i className="fa-solid fa-arrow-right"></i>&nbsp; Home</NavLink></li>
                    <li><NavLink to={"/product"}><i className="fa-solid fa-arrow-right"></i>&nbsp; Product</NavLink></li>
                    <li><NavLink to={"/other"}><i className="fa-solid fa-arrow-right"></i>&nbsp; Other</NavLink></li>
                </ul>
            </div>
            <div className="f-address">
                <h3>Have a Questions?</h3>
                <address>
                    <div><p><i className="fa-solid fa-location-dot"></i>&nbsp; Dehradun, Uttarakhand, India</p></div>
                    <div><p><i className="fa-solid fa-phone"></i>&nbsp; <a href="tel:+919149349278">+91 9149349278</a></p></div>
                    <div><p><i className="fa-regular fa-envelope"></i>&nbsp;&nbsp;
                    <a href="mailto:3469harshsharma@gmail.com">3469harshsharma@gmail.com</a></p></div>
                </address>
            </div>
        </div>
        <div className="container">
            <div className="f-credits">
                <p>Copyright <i className="fa-regular fa-copyright"></i> 2024 All right reserved || This website is made with <i className="fa-regular fa-heart"></i> Harshvardhan Sharma</p>
            </div>
        </div>
    </footer>

    <div className="scroll-top-style">
        <i className="fa-solid fa-arrow-up scroll-top" onClick={scrollTop}></i>
    </div>

    </>
  )
}

export default Buy