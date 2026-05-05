import React from 'react';
import { PenTool, CheckCircle, Shield } from 'lucide-react';

const PaintingBody = () => {
  const benefits = [
    "Reparación de abolladuras sin pintar (PDR).",
    "Pintura al horno con materiales de primera calidad.",
    "Restauración de faros y pulido de carrocería.",
    "Igualación de color computarizada exacta."
  ];

  return (
    <div className="section container" style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <div className="text-center" style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <PenTool className="text-primary" size={40} />
          Chapa y Pintura
        </h1>
        <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
          Devolvemos a tu coche su aspecto original tras cualquier impacto, roce o desgaste.
          Utilizamos tecnología de vanguardia para garantizar la igualación de color perfecta.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8" style={{ alignItems: 'center' }}>
        <div style={{ borderRadius: 'var(--rounded-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
          <img 
            src="https://images.unsplash.com/photo-1599577110901-b75d71c1bd56?q=80&w=800&auto=format&fit=crop" 
            alt="Pintura de coche" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        <div className="card" style={{ padding: '2.5rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Shield className="text-primary" /> Garantía de Calidad
          </h2>
          <p className="text-muted" style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
            En DaMax Autoservice, sabemos que el aspecto exterior de tu vehículo es tan importante como su mecánica. Nuestro equipo de profesionales cuenta con cabinas de pintura de última generación para evitar impurezas y lograr un acabado espejo.
          </p>

          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-4 text-muted">
                <CheckCircle className="text-accent" size={24} style={{flexShrink: 0}} />
                <span style={{ fontSize: '1.05rem' }}>{benefit}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <p className="text-accent" style={{ fontWeight: '500' }}>Para presupuestos, por favor visítenos en el taller para evaluar los daños en persona.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingBody;
