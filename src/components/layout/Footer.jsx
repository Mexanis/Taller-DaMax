import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Share2 } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border-color)', padding: '4rem 0 2rem' }}>
      <div className="container grid md:grid-cols-4 gap-8" style={{ marginBottom: '3rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              color: 'white', width: '40px', height: '40px', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--rounded-md)',
              fontWeight: '700', letterSpacing: '1px'
            }}>DM</div>
            <span style={{ fontWeight: '700', fontSize: '1.25rem' }}>DaMax Autoservice</span>
          </div>
          <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            {t('home.hero_subtitle')}
          </p>
          <div className="flex gap-4">
            <a href="#" className="flex gap-2 items-center text-muted">
              <Share2 size={16} /> Redes Sociales
            </a>
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem', color: 'white' }}>{t('home.services_title')}</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)' }}>
            <li>{t('nav.washing')}</li>
            <li>{t('nav.painting')}</li>
            <li>{t('nav.mechanical')}</li>
            <li>{t('nav.selling')}</li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem', color: 'white' }}>Horario</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)' }}>
            <li>Lunes - Viernes: 08:00 - 18:00</li>
            <li>Sábados: 09:00 - 14:00</li>
            <li>Domingos: Cerrado</li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '1.5rem', color: 'white' }}>Contacto</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)' }}>
            <li className="flex items-center gap-2"><MapPin size={18} className="text-primary"/> Calle Falsa 123, Madrid</li>
            <li className="flex items-center gap-2"><Phone size={18} className="text-primary"/> +34 600 000 000</li>
            <li className="flex items-center gap-2"><Mail size={18} className="text-primary"/> contacto@damax.es</li>
          </ul>
        </div>
      </div>
      
      <div className="container" style={{ textAlign: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        {t('footer.rights')}
      </div>
    </footer>
  );
};

export default Footer;
