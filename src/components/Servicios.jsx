import './Servicios.css';

const servicios = [
    {titulo: "Full Stack", desc: "Sistemas completos de extremo a extremo.", icono: "💻", color: "#007bff"},
    {titulo: "IA & Python", desc: "Automatizacion intelegente para tu negocio.", icono: "🤖", color: "#28a745"},
    {titulo: "DB Design", desc: "Arquitecturas de datos sólidos y escalables.", icono: "📊", color: "#ffc107"}
];

function Servicios() {
  return (
    <section className="services-section" id="servicios">
      <div className="services-header">
        <span className="subtitle">¿Qué puedo hacer por ti?</span>
        <h2 className="section-title">Mis Servicios</h2>
      </div>
      
      <div className="services-grid">
        {servicios.map((servicio, index) => (
          <div key={index} className="service-card">
            <div className="card-inner">
              <span className="service-icon">{servicio.icono}</span>
              <h3>{servicio.titulo}</h3>
              <p>{servicio.desc}</p>
            </div>
              <div className="card-decoration" style={{ backgroundColor: servicio.color }}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
 