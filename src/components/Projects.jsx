import ProjectCard from "./ProjectCard";
import Lion from "../assets/Logo/LEON.webp";
import Medi from "../assets/Logo/Medi.jpg";
import Talent from "../assets/Logo/talent.png";
import './Projects.css';

function Projects() {

    const imagenesNaviGames = import.meta.glob('../assets/NaviGames/*.{png,jpg,jpeg,webp}', {
        eager: true,
        query: '?url',
        import: 'default'
    });

    const imagenesMedisync = import.meta.glob('../assets/Medisync/*.{png,jpg,jpeg,webp}', {
        eager: true,
        query: '?url',
        import: 'default'
    })

    const imagenesTalent = import.meta.glob('../assets/TalentMarket/*.{png,jpg,jpeg,webp}', {
        eager: true,
        query: '?url',
        import: 'default'
    })

    const listaImagenesNavi = Object.values(imagenesNaviGames);
    const listaImagenesMedisync = Object.values(imagenesMedisync);
    const listaImagenesTalent = Object.values(imagenesTalent);
    const misProyectos = [
        {
            imgPrin: Medi,
            titulo: "MediSync",
            descripcion: "Sistema monolítico de gestión clínica desarrollado con Spring Boot y MySQL.",
            tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
            link: "#",
            imagenes: listaImagenesMedisync 
        },
        {
            imgPrin: Lion,
            titulo: "NaviGames",
            descripcion: "Tienda oline dedicada a la venta de videojuegos desarrollada con Spring Boot y MySQL.",
            tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
            link: "#",
            imagenes: listaImagenesNavi
        },
        {
            imgPrin: "",
            titulo: "Stockmaster",
            descripcion: "Software diseñado para almacenes grandes y pequeños ayudando a la automatizacion de procesos y monitoreo del almacén.",
            tags: ["Java", "Spring Boot", "MySQL"],
            link: "#",
            imagenes: ""
        },
        {
            imgPrin: Talent,
            titulo: "TalentMarket Certus",
            descripcion: "Tienda online donde los alumnos de distintas carreras pueden subir sus proyectos y venderlos de manera segura.",
            tags: ["Java", "Spring Boot", "MySQL"],
            link: "#",
            imagenes: listaImagenesTalent
        }

    ];

    return (
        <section className="projects-section" id="proyectos">
            <h2 className="section-title">Mis Proyectos</h2>
            <div className="projects-grid">
                {misProyectos.map((proy, index) => (
                    <ProjectCard
                        key={index}
                        imgPrin={proy.imgPrin}
                        titulo={proy.titulo}
                        descripcion={proy.descripcion}
                        tags={proy.tags}
                        link={proy.link}
                        imagenes={proy.imagenes}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;