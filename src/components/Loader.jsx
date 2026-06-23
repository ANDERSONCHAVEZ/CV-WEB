import { useEffect, useState } from 'react';
import './Loader.css';
import logo from '../assets/logo.png';
import cube from '../assets/cube.png';
import cube2 from '../assets/cube2.png';

function Loader({onFinished}) {

    const [percentage, setPercentage] = useState(0);
    const [statusText, setStatusText] = useState('Iniciando...');

    useEffect(() => {
        const timer = setInterval(() => {
            setPercentage(prev => {
                const next = prev + Math.floor(Math.random() * 10 + 1);
                
                if (next < 30) setStatusText('Cargando módulos...');
                else if (next < 60) setStatusText('Preparando entorno...');
                else if (next < 90) setStatusText('Casi listo...');
                else setStatusText('¡BIENVENIDO!');

                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(() => onFinished(true), 4000);
                    return 100;
                }
                return next;
            });
        }, 150);

        return () => clearInterval(timer);
    }, [onFinished]);

    return (
        <div className="loader-overlay">
            <div className="loader-content">
                <h1 className="welcome-msg">{statusText}</h1>
                <div className="loader-brand">
                    <div className="loader-visual">
                        <img src={logo} alt="" className="loader-img" />
                        <img src={cube2} alt="" className="cube-img" />
                    </div>
                </div>
                <div className="progress-wrapper">
                    <div 
                        className="progress-bar"
                        style={{width: `${percentage}%`}}   
                    ></div>
                </div>
                <div className="percentage-text">
                    {percentage}%
                </div>
            </div>
            <div className="ambient-light"></div>
        </div>
    );
}

export default Loader;