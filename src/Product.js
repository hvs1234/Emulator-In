import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
import logo from './images/logo.webp'
import Data1 from './Productapi'

const Product = () => {

  // Responsive Navbar

  const [isActive, setIsActive] = React.useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-product");

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

  // Product Box API

  const [productdata] = React.useState(Data1);

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
            <li><NavLink className='navlink' to={'/other'}>Other</NavLink></li>
            <li><NavLink className='navlink' to={'/buy'}>Buy</NavLink></li>
          </ul>
        </nav>

        <div className="mobile-navbar-btn" onClick={toggleNavbar}>
          <i name="ham" className={`fa-solid fa-bars mobile-nav-icon`}></i>
          <i name="cross" className={`fa-solid fa-xmark mobile-nav-icon`}></i>
        </div>
        
      </header>

      {/* Product Section */}

      <section className="section section-product">
        <div className="container">
          <h2 className="common-heading">Our Products&nbsp; <i className="fa-solid fa-headset"></i></h2>
          <p className='category-para'>Emulator In offers cutting-edge gaming controllers, designed for precision and immersive gameplay. Elevate your gaming experience with our top-quality, innovative products.</p>
        </div>
        <div className="container grid grid-three-columns product-img">
          {productdata.map((curele) => {
            return (
              <div className="img-overlay" key={curele.id}>
                <img src={curele.image} alt="img" loading='lazy'/>
                <div className="overlay">
                  <div className="overlay-data product-data">
                    <h3 className='heading product-heading'>{curele.title}</h3>
                    <p className='product-para'>{curele.price}</p>
                    <NavLink to={'/buy'} className="btn">{curele.button}</NavLink>
                  </div>
                </div>
              </div>
            );
          })}
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
              <li><NavLink to={'/'}><i className="fa-solid fa-arrow-right"></i>&nbsp; Home</NavLink></li>
              <li><NavLink to={'/other'}><i className="fa-solid fa-arrow-right"></i>&nbsp; Other</NavLink></li>
              <li><NavLink to={'/buy'}><i className="fa-solid fa-arrow-right"></i>&nbsp; Buy</NavLink></li>
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

export default Product