import React from 'react';
import { Tag, Wrench, Settings } from 'lucide-react';

const VehicleSelling = () => {
  const cars = [
    {
      id: 1,
      brand: "Volkswagen Golf GTI - Proyecto Finalizado",
      year: "2019",
      price: "18.500€",
      stats: ["Motor Restaurado", "Pintura Nueva", "Garantía Taller"],
      desc: "Este vehículo llegó a nosotros con impacto lateral severo y bloque motor dañado. Se ha extraído un motor intacto de un vehículo donante y reconstruido entero bajo estándares de competición.",
      img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop",
      tag: "COMPLETADO"
    },
    {
      id: 2,
      brand: "BMW Serie 3 - En Proceso",
      year: "2018",
      price: "19.900€ (Reserva Precio Taller)",
      stats: ["Chasis Nuevo", "Suspensiones M", "En cabina de pintura"],
      desc: "Reconstrucción a partir de dos unidades siniextradas (frontal y trasero). El chasis ha sido soldado con precisión milimétrica. Oportunidad de elegir color final antes de ensamblaje.",
      img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop",
      tag: "EN PROCESO"
    }
  ];

  return (
    <div className="section container" style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <div className="text-center" style={{ marginBottom: '5rem' }}>
        <div className="badge flex items-center justify-center gap-2" style={{ margin: '0 auto 1rem', width: 'fit-content', border: '1px solid var(--primary)', color: 'var(--primary)' }}>
          <Settings size={16} /> DE LA CHATARRA AL ASFALTO
        </div>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>
          PROYECTOS DE RESTAURACIÓN
        </h1>
        <p className="text-muted" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.15rem' }}>
          No somos un compra-venta convencional. Nuestro equipo rescata máquinas averiadas, combina piezas sanas de vehículos idénticos, y las reconstruye con tolerancia cero al fallo. El resultado: Un coche prácticamente nuevo a un precio que destroza al mercado de segunda mano.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8" style={{ marginBottom: '4rem' }}>
        {cars.map(car => (
          <div key={car.id} style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '1rem', left: '-10px', backgroundColor: car.tag === 'COMPLETADO' ? 'var(--primary)' : 'var(--accent)', color: car.tag === 'COMPLETADO' ? 'white' : 'black', padding: '0.5rem 1rem', fontFamily: 'var(--font-header)', zIndex: 10,  boxShadow: '2px 2px 5px rgba(0,0,0,0.5)' }}>
              {car.tag}
            </div>
            <div style={{ height: '350px', overflow: 'hidden' }}>
              <img src={car.img} alt={car.brand} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }} />
            </div>
            <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'white' }}>{car.brand}</h3>
              <div className="text-primary" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-header)', marginBottom: '1.5rem' }}>{car.price}</div>
              
              <p className="text-muted" style={{ marginBottom: '2rem', lineHeight: '1.6' }}>{car.desc}</p>
              
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem', marginTop: 'auto' }}>
                {car.stats.map((stat, idx) => (
                  <span key={idx} className="badge">
                    {stat}
                  </span>
                ))}
              </div>

              <button className="btn btn-outline" style={{ width: '100%' }}>
                SOLICITAR INFORMES DEL PROYECTO
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleSelling;
