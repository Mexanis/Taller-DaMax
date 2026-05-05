import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ChevronRight, Droplets, PenTool, Wrench, ShieldCheck, Tag } from 'lucide-react';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 'mechanical',
      icon: <Wrench size={48} className="text-primary" />,
      title: t('services.mechanical.title'),
      desc: t('services.mechanical.desc'),
      link: '/mecanica',
      img: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'painting',
      icon: <PenTool size={48} className="text-primary" />,
      title: t('services.painting.title'),
      desc: t('services.painting.desc'),
      link: '/chapa-pintura',
      img: 'https://images.unsplash.com/photo-1599577110901-b75d71c1bd56?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'washing',
      icon: <Droplets size={48} className="text-primary" />,
      title: t('services.washing.title'),
      desc: t('services.washing.desc'),
      link: '/lavado',
      img: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'selling',
      icon: <Tag size={48} className="text-primary" />,
      title: "Proyectos de Restauración",
      desc: "Reconstruimos el vehículo perfecto a partir de oportunidades de mercado.",
      link: '/venta',
      img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="home-wrapper">
      {/* Industrial Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-badge">Taller Especializado y Restauración</div>
          <h1 className="hero-title">
            EN DAMAX DAMOS <span className="text-primary">LO MÁXIMO</span>
          </h1>
          <p className="hero-subtitle">
            Por eso tu coche merece estar en nuestras manos. Especialistas en mecánica avanzada, chapa, pintura y proyectos de restauración.
          </p>
          <div className="flex gap-4 items-center" style={{ marginTop: '2.5rem' }}>
            <a href="#garage" className="btn btn-primary" style={{ fontSize: '1.2rem' }}>
              EXPLORAR TALLER <ChevronRight size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
          </div>
          
          <div className="trust-badges" style={{ marginTop: '4rem', display: 'flex', gap: '2rem' }}>
             <div className="flex items-center gap-2 text-muted">
                <ShieldCheck className="text-primary" size={24}/>
                <span style={{ fontFamily: 'var(--font-header)', letterSpacing: '1px' }}>Garantía 100% Mecánica</span>
             </div>
             <div className="flex items-center gap-2 text-muted">
                <Wrench className="text-primary" size={24}/>
                <span style={{ fontFamily: 'var(--font-header)', letterSpacing: '1px' }}>Técnicos Certificados</span>
             </div>
          </div>
        </div>
      </section>

      {/* Industrial Alternating Layout for Services */}
      <section id="garage" className="section container">
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--text-main)' }}>NUESTRO GARAGE</h2>
          <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary)', margin: '1rem auto 0' }}></div>
        </div>

        <div className="industrial-services">
          {services.map((service, idx) => (
            <div key={idx} className={`service-strip ${idx % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="service-img-container">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="service-text-container">
                <div className="service-icon-box">{service.icon}</div>
                <h3 className="service-heading">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
                <Link to={service.link} className="btn btn-outline" style={{ marginTop: '2rem' }}>
                  SABER MÁS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
