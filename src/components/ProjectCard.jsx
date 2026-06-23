import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './Projects.css';

const MySwal = withReactContent(Swal);

function ProjectCard({ imgPrin, titulo, descripcion, tags, link, imagenes = [] }) {

    const [onOpenCard, setOnOpenCard] = useState(false);
    const [currentImg, setCurrentImg] = useState(0);

    const nextSlide = () => {
        setCurrentImg((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    }

    const prevSlide = () => {
        setCurrentImg((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
    }

    useEffect(() => {
        if (onOpenCard) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto"
        }
    }, [onOpenCard]);

    const mostrarAlertaDesarrollo = () => {
        MySwal.fire({
            title: <strong style={{ color: '#fff' }}>¡Proyecto en Desarrollo!</strong>,
            html: <p style={{ color: '#ccc' }}>Este proyecto continúa en desarrollo activo por el momento. ¡Pronto estará listo! 🚀</p>,
            icon: 'info',
            background: '#1e1e24',
            confirmButtonText: 'Entendido',
            confirmButtonColor: '#3085d6',
            customClass: {
                popup: 'border-radius-custom'
            }
        })
    }

    return (
        <>
            <div className="project-card">
                <div className="project-image-placeholder">
                    <img src={imgPrin} alt="" className = "project-image"/>
                </div>
                <div className="project-info">
                    <h3>{titulo}</h3>
                    <p>{descripcion}</p>
                    <div className="project-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                    <button 
                        className="btn-proyect" 
                        onClick={() => {
                            if (!imagenes || imagenes.length === 0 || imagenes === "") {
                                mostrarAlertaDesarrollo();
                            } else {
                                setOnOpenCard(true);
                            }
                        }}
                    >
                        Ver Proyecto →
                    </button>
                </div>
            </div>
            {onOpenCard && (
                <div className="project-overlay" onClick={() => setOnOpenCard(false)}>
                    <div className="project-expanded-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setOnOpenCard(false)}>x</button>

                        <div className="project-modal-grid">
                            <div className="carousel-container">
                                {imagenes.length > 1 && (
                                    <>
                                        <button className="car-btn prev" onClick={prevSlide}>❮</button>
                                        <button className="car-btn next" onClick={nextSlide}>❯</button>
                                    </>
                                )}

                                <div className="carousel-slide">
                                    <img src={imagenes[currentImg]} alt={`Slide ${currentImg}`} />
                                </div>

                                <div className="carousel-dots">
                                    {imagenes.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`dot2 ${currentImg === idx ? 'active' : ''}`}
                                            onClick={() => setCurrentImg(idx)}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="project-desc">
                                <h2>{titulo}</h2>
                                <p className="full-description">{descripcion}</p>
                                <div className="modal-tags">
                                    {tags.map((tag, index) => (
                                        <span className="tag-pill" key={index}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProjectCard;
