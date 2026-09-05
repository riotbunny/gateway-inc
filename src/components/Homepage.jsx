import React, { useEffect } from 'react';

export default function Homepage({ onOpenModal }) {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
    
    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <style>{`
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 50px;
            z-index: 100;
            background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
        }
        .logo {
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
        }
        .nav-links { display: flex; gap: 30px; }
        .nav-links a { color: #fff; text-decoration: none; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; transition: color 0.3s; }
        .nav-links a:hover { color: #ccc; }
        .nav-actions button { background-color: transparent; color: white; border: 2px solid white; padding: 10px 20px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold; cursor: pointer; transition: all 0.3s; border-radius: 4px; }
        .nav-actions button:hover { background-color: white; color: black; }

        section { position: relative; height: 100vh; width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed; }
        .hero { background-image: url('/images/rural_area_1788631435693.jpg'); }
        .device { background-image: url('/images/futuristic_router_1788631450479.jpg'); }
        .network { background-image: url('/images/global_network_1788630738639.jpg'); }

        .overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; }
        .content { position: relative; z-index: 2; max-width: 800px; padding: 0 20px; margin-top: auto; margin-bottom: 100px; }

        h1 { font-size: 48px; font-weight: 700; text-transform: uppercase; letter-spacing: 4px; margin-bottom: 20px; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
        p { font-size: 18px; font-weight: 300; line-height: 1.6; margin-bottom: 20px; text-shadow: 0 1px 3px rgba(0,0,0,0.5); }
        .price-tag { font-size: 24px; font-weight: bold; color: #4ade80; margin-bottom: 30px; text-shadow: 0 2px 4px rgba(0,0,0,0.8); }

        .btn { display: inline-block; background: rgba(255, 255, 255, 0.1); color: #fff; border: 2px solid #fff; padding: 15px 40px; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; text-decoration: none; transition: all 0.3s ease; backdrop-filter: blur(5px); border-radius: 4px; cursor: pointer; }
        .btn:hover { background: #fff; color: #000; }
        
        .arrow { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); z-index: 2; animation: bounce 2s infinite; cursor: pointer; }
        .arrow svg { width: 30px; height: 30px; fill: white; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5)); }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
            40% { transform: translateY(-20px) translateX(-50%); }
            60% { transform: translateY(-10px) translateX(-50%); }
        }
        
        .fade-in { opacity: 0; transform: translateY(40px); transition: opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .fade-in.visible { opacity: 1; transform: translateY(0); }

        footer { background: #000; padding: 40px 20px; text-align: center; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 1px; }
        footer a { color: #666; text-decoration: none; margin: 0 10px; transition: color 0.3s; }
        footer a:hover { color: #fff; }

        @media (max-width: 768px) {
            nav { padding: 15px 20px; }
            .nav-links { display: none; }
            h1 { font-size: 32px; letter-spacing: 2px; }
            p { font-size: 16px; margin-bottom: 20px; }
            .price-tag { font-size: 20px; }
            .btn { padding: 12px 30px; font-size: 12px; }
        }
      `}</style>
      
      <nav>
        <div className="logo">Gateway</div>
        <div className="nav-links">
          <a href="#">Residential</a>
          <a href="#">Business</a>
          <a href="#">Enterprise</a>
          <a href="#">Technology</a>
        </div>
        <div className="nav-actions">
          <button onClick={onOpenModal}>Order Now</button>
        </div>
      </nav>

      <section className="hero">
        <div className="overlay" style={{ background: 'rgba(0, 0, 0, 0.4)' }}></div>
        <div className="content fade-in">
          <h1>High-Speed 5G Connectivity</h1>
          <p>Reliable, lightning-fast 5G internet for your home and business. No cables, no technicians, no hassle.</p>
          <div className="price-tag">Starting at $35/month</div>
          <button onClick={onOpenModal} className="btn">View Availability</button>
        </div>
        <div className="arrow">
          <svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
        </div>
      </section>

      <section className="device">
        <div className="overlay" style={{ background: 'rgba(0,0,0,0.6)' }}></div>
        <div className="content fade-in">
          <h1>Plug and Play</h1>
          <p>No technician required. Simply plug in your Gateway 5G router and connect all your devices in minutes.</p>
          <button onClick={onOpenModal} className="btn">Explore Hardware</button>
        </div>
      </section>

      <section className="network">
        <div className="overlay" style={{ background: 'rgba(0, 0, 0, 0.4)' }}></div>
        <div className="content fade-in">
          <h1>Nationwide Coverage</h1>
          <p>Our expansive 5G network ensures you stay connected with ultra-low latency wherever you are.</p>
          <button onClick={onOpenModal} className="btn">Learn More</button>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Gateway Inc. All rights reserved.</p>
        <div style={{ marginTop: '15px' }}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Support</a>
        </div>
      </footer>
    </>
  );
}
