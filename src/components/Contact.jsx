import * as Icon from 'lucide-react';
import './Contact.css';
import logo from '../assets/logo.png';

function Contact({onOpenMagazine}) {

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <footer className="footer-section" id='contacto'>
            <div className="footer-main">
                <div className="footer-col footer-1">
                    <div className="footer-logo">
                        <img src={logo} alt="" className="logo-img" />
                    </div>
                    <p className="footer-status">
                        <span className="dot"></span>Disponible para nuevos proyectos
                    </p>
                    <p className="footer-bio">
                        Desarrollador de software enfocado en crear soluciones eficiente con Java, Python, React, etc.
                    </p>
                </div>
                <div className="footer-col footer-2">
                    <h3>Navegación</h3>
                    <ul className="footer-links">
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#about me">About Me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#servicios">Servicios</a></li>
                        <li><a href="#proyectos">Proyectos</a></li>
                        <li><button onClick={onOpenMagazine} className ="footer-cv-link">Ver CV</button></li>
                    </ul>
                </div>
                <div className="footer-col footer-3">
                    <h3>Hablemos</h3>
                    <p>¿Tienes una idea en mente? <br /> Envíame un mensaje:</p>
                    <a href="mailto:achavezrodrigez7@gmail.com" className = "footer-mail">achavezrodrigez7@gmail.com</a>
                    <div className="footer-socials">
                        <a href="#">LinkedIn</a>
                        <a href="https://github.com/ANDERSONCHAVEZ">GitHub</a>
                        <a href="https://wa.me/953031367">WhatsApp</a>
                    </div>
                </div>
            </div>
                <div className="footer-bottom footer-4">
                    <p>&copy; {new Date().getFullYear()} Anderson - Lima, Perú</p>
                    <button className="back-to-top" onClick={scrollToTop}>Volver arriba ↑</button>
                </div>
        </footer>
    );
}

export default Contact;