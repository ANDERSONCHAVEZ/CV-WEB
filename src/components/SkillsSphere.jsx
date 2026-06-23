import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Float, OrbitControls, Text, Center, Environment } from '@react-three/drei'
import { Vector3 } from 'three'
import * as THREE from 'three'
import * as random from 'maath/random/dist/maath-random.esm'
import './SkillsSphere.css'

const STACKS = {
  Todos: ['JAVA', 'REACT', 'PYTHON', 'MYSQL', 'SPRING', 'CSS', 'HTML', 'JS', 'PHP'],
  Frontend: ['REACT', 'CSS', 'HTML', 'JS', 'TAILWIND', 'TYPESCRIPT', 'NEXT.JS'],
  Backend: ['JAVA', 'SPRING', 'PYTHON', 'MYSQL', 'POSTGRESQL', 'PHP', 'MONGODB'],
  Herramientas: ['GIT', 'DOCKER', 'POSTMAN', 'VITE', 'SCRUM', 'AWS']
}

const SKILLS_DETAILS = {
  JAVA: "Dominio del lenguaje orientado a objetos para el desarrollo de aplicaciones robustas, escalables y seguras.",
  SPRING: "Especialista en Spring Boot para la creación de microservicios, APIs REST y gestión de persistencia con Spring Data JPA.",
  PYTHON: "Uso de scripts para automatización, procesamiento de datos y dearrollo de lógica de backend eficientemente.",
  MYSQL: "Diseño de base de datos relacionales y optimización de consultas. ",
  POSTGRESQL: "Manejo avanzado de bases de datos relacionales con soporte para datos complejos y alta concurrencia.",
  PHP: "Desarrollo de aplicaciones web dinámicas y mantenimiento de sistemas basados en arquitecturas tradicionales.",
  MONGODB: "Implemetación de bases de datos NoSQL para el manejo de grandes volúmenes de datos no estructurados.",
  REACT: "Desarrollo de interfaces de usuario modernas utilizando componentes funcionales, Hooks y gestión de estado eficiente.",
  JS: "Dominio de JavasScript moderno (ES6+) para dar interactividad dinámica y lógica compleja al lado del cliente.",
  TYPESCRIPT: "Implementación de tipado estático en proyectos de gran escala para reducir errores y mejorar la mantenibilidad del código.",
  HTML: "Maquetación semántica de alta calidad siguiendo estándares de accesibilidad y optimización para buscadores (SEO).",
  CSS: "Diseño visual avanzado, uso de Flexbox, grid y animaciones para crear experiencia de usuario atractivas.",
  TAILWIND: "Uso de frameworks de utilidad para desarrollo rápido de interfaces modernas y totalmente responsivas.",
  VITE: "Configuración de entornos de desarrollo ultra-rápidos para proyectos modernos de Frontend.",
  GIT: "Control de versiones profesional, manejo de ramas (Git Flow) y colaboración eficiente en repositorios remotos.",
  DOCKER: "Contenedorización de aplicaciones para asegurar un despliegue consistente en diferentes entornos de ejecución.",
  POSTMAN: "Pruebas exhaustivas de APIs, automatización de test y documentación técnica de endpoints.",
  AWS: "Gestion de servicios en la nube para el despliegue, almacenamiento y escalabilidad de aplicaciones modernas.",
  SCRUM: "Trabajo bajo metodologías ágiles, enfocado en entregas iterativas y mejora continua del producto."
}

function Word({ children, position, onClick }) {
  const textRef = useRef()

  useFrame((state) => textRef.current?.lookAt(state.camera.position));

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.25}
      color="white"
      anchorX="center"
      anchorY="middle"
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'auto')}
      onClick={(e) => {
        e.stopPropagation();
        onClick(children);
      }}
    >
      {children}
    </Text>
  );
}

function WordCloud({ words, onWordClick }) {
  const groupRef = useRef()
  const cloud = useMemo(() => {
    const temp = []
    const count = words.length
    const spherical = new THREE.Spherical()
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      const vector = new THREE.Vector3().setFromSphericalCoords(2, phi, theta)
      temp.push({ position: vector, word: words[i] })
    }
    return temp
  }, [words])
  useFrame((state, delta) => {

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      {cloud.map((item, idx) => (
        <Word key={`${item.word}-${idx}`} position={item.position} onClick={onWordClick}>
          {item.word}
        </Word>
      ))}
    </group>
  )
}


function PointCloud({ hovered }) {
  const ref = useRef()
  const sphere = useMemo(() => random.inSphere(new Float32Array(12000), { radius: 2 }), [])
  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.1
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={hovered ? "#00c3ff" : "#a8dfff"}
          size={0.050}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

export default function SkillsSphere() {
  const [hovered, setHovered] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeStack, setActiveStack] = useState('Todos');
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dynamicMaxDistance = windowWidth >= 1000 ? 12 : 14;
  const dynamicMinDistance = windowWidth >= 1000 ? 7 : 9;
  const dynamicMinCamera = windowWidth >= 1000 ? 9 : 12;

  return (
    <div className="skills-section">
      <div
        className="skills-wrapper"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        style={{
          position: 'relative',
        }}
      >
        <Canvas
          className='skills-canvas'
          camera={{ position: [0, 0, dynamicMinCamera], fov: 30 }}
          style={{ width: '90%', height: '70vh' }}
          shadows
        >
          <ambientLight intensity={0.5} />

          <directionalLight
            position={[6,12,2]}
            intensity={1}
            castShadow
          />

          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffe0b2" />

          <WordCloud words={STACKS[activeStack]} onWordClick={setSelectedSkill} />
          <OrbitControls
            enablePan={false}
            enableZoom={hovered}
            minDistance={dynamicMinDistance}
            maxDistance={dynamicMaxDistance}
            autoRotate={true}
            autoRotateSpeed={0.5}
            makeDefault
          />
          <PointCloud hovered={hovered} />
          <Environment preset="city" />
        </Canvas>
        {selectedSkill && (
          <div className="skill-detail-card">
            <div className="card-header">
              <h3>{selectedSkill}</h3>
              <button className="close-btn" onClick={() => setSelectedSkill(null)}>×</button>
            </div>
            <p>{SKILLS_DETAILS[selectedSkill] || "Desarrollando soluciones innovadoras con esta tecnología."}</p>
            <div className="card-footer">
              <small>Nivel: Avanzado</small>
            </div>
          </div>
        )}
      </div>
      <div className="skills-information">
        <h1 className='skills-title'>Tecnologías</h1>
        <div className="stack-filters">
          {Object.keys(STACKS).map(stack => (
            <button
              key={stack}
              className={activeStack === stack ? 'active' : ''}
              onClick={() => setActiveStack(stack)}
            >
              {stack}
            </button>
          ))}
        </div>
        <p className="skills-desc">Especializado en la cración de sistemas robustos y escalables,
          integrando la lógica potente de Java con interfaces dinámicas
          en React. Mi enfoque principal es el rendimiento y la arquitectura
          limpia.
        </p>

        <div className="currently-learning">
          <h4>🚀 Aprendiendo actualmente:</h4>
          <div className="learning-item">
            <span>Microservicios con AWS & Kubernetes</span>
            <div className="progress-barra"><div className="progress-fill"></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}