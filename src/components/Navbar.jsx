import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar({onOpenMagazine}) {

    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('inicio');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['inicio', 'about me','skills', 'servicios', 'proyectos', 'contacto'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 300 && rect.bottom >= 300;
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <img src={logo} alt="" className ="nav-logo"/>
            <div className="nav-container">
                <div className='logo'>Daniel <span>.dev</span></div>

                <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
                
                <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
                    {['inicio', 'about me','skills', 'servicios', 'proyectos', 'contacto'].map((item) => (
                        <li key={item}>
                            <a href={`#${item}`}
                                className={activeSection === item ? 'active' : ''}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.replace('-', '')}
                            </a>
                        </li>
                    ))}
                    <li className="mobile-only">
                        <button className='nav-btn' onClick={() => { onOpenMagazine(); setIsMenuOpen(false); }}>
                            Mi CV
                        </button>
                    </li>
                </ul>
                <button className='nav-btn desktop-only' onClick={onOpenMagazine}>Mi CV</button>
            </div>
        </nav>
    );
}
export default Navbar;