import Gafete from './Gafete';
import './About.css';

function About() {
    return(
        <section className="about-section" id='about me'>
            <div className="about-container">
                <div className="about-visual">
                    <div className="image-wrapper">
                            <Gafete/>
                    </div>
                </div>
                <div className="about-text">
                    <h2 className="section-title">Acerca de Mí</h2>
                    <p className="description">
                        Soy Anderson Daniel, estudiante de 6to ciclo de Diseño y de Desarrollo de software en el Instituto
                        Certus. Me apasiona la arquitectura de software y la automatizacion de procesos mediante IA.
                    </p>

                    <div className="info-grid">
                        <div className="info-item">
                            <h3>Educación</h3>
                            <p>Instituto Certus (Diseño y Desarrollo de software)</p>
                            <span>2023-Presente</span>
                        </div>
                        <div className="info-item">
                            <h3>Experiencia</h3>
                            <p>Desarrollo de sistemas monolíticos con Spring Boot y automatización con Python.</p>
                        </div>
                        <div className="skills-container">
                            <h3>Habílidades Técnicas</h3>
                            <div className="skills-tags">
                                <span>Java</span>
                                <span>Spring Boot</span>
                                <span>Python</span>
                                <span>MySQL</span>
                                <span>React</span>
                                <span>Git</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;