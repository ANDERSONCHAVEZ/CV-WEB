import { useState } from 'react';
import { QrCode, Wifi, ShieldCheck } from 'lucide-react';
import logo from '../assets/logo.png'; // Usamos tu logo circular
import './Gafete.css';

function Gafete() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="gafete-scene">
      {/* El Cordón */}
      <div className="cordon">
        <div className="gancho"></div>
      </div>

      <div 
        className={`gafete-card ${flipped ? 'is-flipped' : ''}`} 
        onClick={() => setFlipped(!flipped)}
      >
        <div className="gafete-face face-front">
          <div className="gafete-header">
            <Wifi size={16} />
            <span className="chip"></span>
          </div>
          
          <div className="gafete-body">
            <img src={logo} alt="Anderson" className="gafete-avatar" />
            <h3>Anderson</h3>
            <p>Software Developer</p>
            <span className="badge-type">FULL ACCESS</span>
          </div>
          
          <div className="gafete-footer">
            <ShieldCheck size={20} color="#007bff" />
            <span>CERTUS INSTITUTE</span>
          </div>
        </div>

        {/* PARTE TRASERA */}
        <div className="gafete-face face-back">
          <div className="gafete-back-content">
            <h4>Registro de Seguridad</h4>
            <div className="qr-container">
              <QrCode size={120} strokeWidth={1.5} />
            </div>
            <p className="serial">ID: 2026-ST-CERTUS</p>
            <p className="disclaimer">
              Este acceso es personal e intransferible. <br />
              Válido para el ciclo 6.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gafete;