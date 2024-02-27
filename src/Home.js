import React from 'react'
import { NavLink } from 'react-router-dom'
import Typed from 'typed.js'
import './style.css'
import logo from './images/logo.webp'
import hero_img from './images/hero-img.webp'
import img1 from './images/category/img1.webp'
import img2 from './images/category/img3.webp'

const Home = () => {

  // Auto Type

  React.useEffect(() => {
    var type = new Typed(".auto-type", {
      strings: [
        "Branded Collection `<i class=\"fa-brands fa-fantasy-flight-games\"></i>`","Different Categories `<i class=\"fa-brands fa-fantasy-flight-games\"></i>`","Online Emulator Store `<i class=\"fa-brands fa-fantasy-flight-games\"></i>`"
      ],
      typeSpeed: 30,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      type.destroy();
    };
  }, []);

  // Responsive Navbar

  const [isActive, setIsActive] = React.useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-hero");

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

  // Animated Counter 

  const workdataRef = React.useRef(null);

  React.useEffect(() => {
    const workdata = workdataRef.current;

    const workObserver = (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) return;

      const countNum = document.querySelectorAll('.counter-numbers');
      const speed = 120;
      countNum.forEach((curEle) => {
        const updateNum = () => {
          const target = parseInt(curEle.dataset.number);
          const initial = parseInt(curEle.innerText);
          const increment = Math.trunc(target / speed);
          if (initial < target) {
            curEle.innerText = `${initial + increment}+`;
            setTimeout(updateNum, 5);
          } else {
            curEle.innerText = `${target}+`;
          }
        };
        updateNum();
      });
    };

    const workObserve = new IntersectionObserver(workObserver, {
      root: null,
      threshold: 0,
    });

    workObserve.observe(workdata);

    return () => workObserve.disconnect();
  }, []);

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
            <li><a className='navlink' href="#service">Service</a></li>
            <li><a className='navlink' href="#category">Category</a></li>
            <li><NavLink className='navlink' to={'/product'}>Product</NavLink></li>
            <li><NavLink className='navlink' to={'/other'}>Other</NavLink></li>
            <li><NavLink className='navlink' to={'/buy'}>Buy</NavLink></li>
          </ul>
        </nav>

        <div className="mobile-navbar-btn" onClick={toggleNavbar}>
          <i name="ham" className={`fa-solid fa-bars mobile-nav-icon`}></i>
          <i name="cross" className={`fa-solid fa-xmark mobile-nav-icon`}></i>
        </div>
        
      </header>

      {/* Hero Section */}

      <section className="section section-hero">
        <div className="container grid grid-two-columns">
          <div className="section-hero-data">
            <h1 className='hero-top-heading'><span className='hero-span'>E</span>mulator <span className='hero-span'>I</span>n</h1>
            <h3 className='hero-heading'><span className='hero-span'>50%</span> off for first purchase</h3>
            <h3><span className="auto-type"></span></h3>
            <p className='hero-para'><i className="fa-solid fa-quote-left"></i>&nbsp; Emulator offers cutting-edge gaming controllers for an immersive experience.&nbsp; <i className="fa-solid fa-quote-right"></i></p>
          </div>
          <div className="section-hero-img">
            <img src={hero_img} alt="hero" loading='lazy' />
          </div>
        </div>
      </section>

      {/* Service Section */}

      <section className="section section-service" id='service'>
        <div className="container">
          <h2 className="common-heading">Our Services&nbsp; <i className="fa-brands fa-servicestack"></i></h2>
          <p className='service-para'>Emulator In offers top-notch online gaming emulators, providing a seamless experience for gamers. Explore a vast collection of emulators for ultimate enjoyment.</p>
        </div>
        <div className="container grid grid-three-columns">
          <div className="service-box">
            <i className="fa-solid fa-users service-logo"></i>
            <h3>Customer Service</h3>
            <p>Exceptional customer service is characterized by prompt responsiveness, genuine empathy.</p>
          </div>
          <div className="service-box">
            <i className="fa-solid fa-store service-logo"></i>
            <h3>Online Store</h3>
            <p>Exceptional customer service is characterized by prompt responsiveness, genuine empathy.</p>
          </div>
          <div className="service-box">
            <i className="fa-solid fa-users service-logo"></i>
            <h3>Returnable</h3>
            <p>Exceptional customer service is characterized by prompt responsiveness, genuine empathy.</p>
          </div>
          <div className="service-box">
            <i className="fa-solid fa-rotate-left service-logo"></i>
            <h3>Branded Service</h3>
            <p>Exceptional customer service is characterized by prompt responsiveness, genuine empathy.</p>
          </div>
          <div className="service-box">
            <i className="fa-solid fa-dollar-sign service-logo"></i>
            <h3>Best Price</h3>
            <p>Exceptional customer service is characterized by prompt responsiveness, genuine empathy.</p>
          </div>
          <div className="service-box">
            <i className="fa-solid fa-truck-fast service-logo"></i>
            <h3>Free Delivery</h3>
            <p>Exceptional customer service is characterized by prompt responsiveness, genuine empathy.</p>
          </div>
        </div>
      </section>

      {/* <!-- Animated Counter Section --> */}

      <section className="section section-work" ref={workdataRef}>
        <div className="container grid grid-three-columns">
          <div>
            <h2 className="counter-numbers" data-number="1500+">0+</h2>
            <p className="work-para">Daily Customer Visit</p>
          </div>
          <div>
            <h2 className="counter-numbers" data-number="3000+">0+</h2>
            <p className="work-para">Happy Clients</p>
          </div>
          <div>
            <h2 className="counter-numbers" data-number="6000+">0+</h2>
            <p className="work-para">Experience</p>
          </div>
        </div>
      </section>

      {/* Category Section */}

      <section className="section section-category" id='category'>
        <div className="container">
          <h2 className="common-heading">Our Categories&nbsp; <i className="fa-solid fa-headset"></i></h2>
          <p className='category-para'>Our gaming controller boasts ergonomic design, responsive buttons, precise analog sticks, customizable features, wireless connectivity, and immersive haptic feedback, enhancing gaming experiences.</p>
        </div>
        <div className="container grid grid-two-columns product-img">
          <div className="img-overlay">
            <img src={img1} alt="img" loading="lazy" />
            <div className="overlay">
              <div className="overlay-data">
                <h3 id="heading">Gaming Controllers</h3>
                <NavLink to={'/product'} className="btn">View More</NavLink>
              </div>
            </div>
          </div>
          <div className="img-overlay">
            <img src={img2} alt="img" loading="lazy" />
            <div className="overlay">
              <div className="overlay-data">
                <h3 id="heading">Others Product</h3>
                <NavLink to={'/other'} className="btn">View More</NavLink>
              </div>
            </div>
          </div>
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
              <li><a href="/"><i className="fa-solid fa-arrow-right"></i>&nbsp; Home</a></li>
              <li><a href="#service"><i className="fa-solid fa-arrow-right"></i>&nbsp; Service</a></li>
              <li><a href="#category"><i className="fa-solid fa-arrow-right"></i>&nbsp; Category</a></li>
              <li><NavLink className='navlink' to={'/product'}><i className="fa-solid fa-arrow-right"></i>&nbsp; Product</NavLink></li>
              <li><NavLink className='navlink' to={'/other'}><i className="fa-solid fa-arrow-right"></i>&nbsp; Other</NavLink></li>
              <li><NavLink className='navlink' to={'/buy'}><i className="fa-solid fa-arrow-right"></i>&nbsp; Buy</NavLink></li>
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

export default Home