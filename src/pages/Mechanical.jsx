import React from 'react';
import { Wrench, Settings, Activity, Clock } from 'lucide-react';

const Mechanical = () => {
  const services = [
    { icon: <Activity size={32} />, title: "Diagnosis Avanzada", desc: "Equipos de última generación para detectar cualquier fallo electrónico o mecánico al instante." },
    { icon: <Settings size={32} />, title: "Mantenimiento Preventivo", desc: "Cambios de aceite, filtros, correas de distribución y revisiones pre-ITV para viajar seguro." },
    { icon: <Wrench size={32} />, title: "Reparación General", desc: "Solucionamos problemas de motor, transmisión, frenos, suspensión y escape con repuestos originales." }
  ];

  return (
    <div className="section container" style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <Wrench className="text-primary" size={40} />
          Mecánica General
        </h1>
        <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
          Tu seguridad es nuestra prioridad. Confía en nuestros expertos para el mantenimiento y reparación de tu vehículo, garantizando un rendimiento óptimo.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8" style={{ marginBottom: '4rem' }}>
        {services.map((svc, idx) => (
          <div key={idx} className="card" style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ 
              width: '80px', height: '80px', borderRadius: '50%', 
              backgroundColor: 'rgba(59, 130, 246, 0.1)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--primary)', marginBottom: '1.5rem'
            }}>
              {svc.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{svc.title}</h3>
            <p className="text-muted" style={{ lineHeight: '1.6' }}>{svc.desc}</p>
          </div>
        ))}
      </div>

      <div className="card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'linear-gradient(145deg, #181b21, #0f1115)' }}>
        <Clock size={48} className="text-accent" style={{ marginBottom: '1rem' }} />
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>¿Necesitas una revisión urgente?</h2>
        <p className="text-muted text-center" style={{ maxWidth: '600px', marginBottom: '2rem' }}>
          Ofrecemos servicio de atención rápida para averías que inmovilizan el vehículo. Llámanos o acude directamente a nuestro taller y te daremos prioridad.
        </p>
        <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
          Llamar al Taller
        </button>
      </div>
    </div>
  );
};

export default Mechanical;
