import { useState,useEffect } from "react";
import './Hero.css';

function Hero() {

    const frases = ["Desarrollador de Software", "Especialista en IA", "Desarrollador fullstack"]
    const [index, setIndex] = useState (0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if(subIndex === frases[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 2000);
            return;
        }

        if(subIndex === 0 && reverse) {
            setReverse(false)
            setIndex((prev) => (prev + 1) % frases.length);
            return
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <section className="hero" id="inicio">
            <div className="hero-info">
                <h1>Hola, soy <span className="name"> Anderson Daniel</span></h1>
                <h2 className="typewriter">
                    {frases[index].substring(0, subIndex)}
                    <span className="cursor">|</span>
                </h2>
                <p>Transformando ideas en código. Especialista en Java y Python.</p>
                <div className="hero-buttons">
                    <button className="btn-primary">Contratar</button>
                    <button className="btn-secondary">Saber más</button>
                </div>
            </div>
            <div className="hero-image">
                <div className="card-placeholder">

                </div>
            </div>
        </section>
    );
}

export default Hero;