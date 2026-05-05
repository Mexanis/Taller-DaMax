import React, { useState } from 'react';
import { Clock, Calendar, Droplets, CheckCircle, ChevronRight } from 'lucide-react';
import './CarWashing.css';

const CarWashing = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const services = [
    { id: 'fast', name: 'Lavado Rápido', duration: '30 mins', price: '15€', desc: 'Lavado exterior a presión y aspirado interior básico.' },
    { id: 'full', name: 'Lavado Completo', duration: '1 hora', price: '35€', desc: 'Lavado exterior a mano, encerado, aspirado profundo y limpieza de cristales.' },
    { id: 'detail', name: 'Detailing Premium', duration: '3 horas', price: '80€', desc: 'Tratamiento cerámico, limpieza de tapicería y restauración de plásticos.' }
  ];

  // Mock available hours (every hour from 9:00 to 17:00)
  const availableHours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  const handleBooking = (e) => {
    e.preventDefault();
    if(selectedDate && selectedTime && selectedService) {
      setIsBooked(true);
      // In a real app, make API call to save booking here
    }
  };

  return (
    <div className="washing-wrapper">
      <div className="container section">
        <div className="text-center" style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <Droplets className="text-primary" size={40} />
            Lavado de Vehículos
          </h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Devuélvele a tu coche su aspecto de concesionario con nuestros servicios de limpieza premium.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Services List */}
          <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>Nuestros Servicios</h2>
            <div className="services-list">
              {services.map(svc => (
                <div 
                  key={svc.id} 
                  className={`service-option card ${selectedService === svc.id ? 'selected' : ''}`}
                  onClick={() => setSelectedService(svc.id)}
                >
                  <div className="flex justify-between items-center" style={{ marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)' }}>{svc.name}</h3>
                    <span className="text-primary fw-bold" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{svc.price}</span>
                  </div>
                  <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{svc.desc}</p>
                  <div className="flex items-center gap-2 text-muted" style={{ fontSize: '0.85rem' }}>
                    <Clock size={16} className="text-accent" />
                    <span>Tiempo estimado: {svc.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reservation System */}
          <div>
            <div className="reservation-card card">
              <h2 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>Reserva tu Cita</h2>
              
              {isBooked ? (
                <div className="booking-success text-center">
                  <CheckCircle size={64} className="text-accent" style={{ margin: '0 auto 1.5rem' }} />
                  <h3 style={{ marginBottom: '1rem', color: 'White' }}>¡Reserva Confirmada!</h3>
                  <p className="text-muted" style={{ marginBottom: '2rem' }}>
                    Te esperamos el {selectedDate} a las {selectedTime} para el servicio de {services.find(s=>s.id===selectedService)?.name}.
                  </p>
                  <button className="btn btn-outline" onClick={() => {
                    setIsBooked(false);
                    setSelectedService('');
                    setSelectedDate('');
                    setSelectedTime('');
                  }}>Hacer otra reserva</button>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="booking-form">
                  <div className="form-group">
                    <label>Fecha</label>
                    <div className="input-with-icon">
                      <Calendar size={18} />
                      <input 
                        type="date" 
                        required 
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Hora</label>
                    <div className="time-slots grid grid-cols-3 gap-2">
                      {availableHours.map(time => (
                        <div 
                          key={time}
                          className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                    {!selectedTime && <p className="text-muted" style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>Selecciona una hora para continuar</p>}
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}
                    disabled={!selectedDate || !selectedTime || !selectedService}
                  >
                    Confirmar Reserva <ChevronRight size={20} />
                  </button>
                  {(!selectedService) && (
                    <p className="text-accent text-center" style={{ fontSize: '0.85rem', marginTop: '1rem' }}>
                      Debes seleccionar un servicio a la izquierda primero.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CarWashing;
