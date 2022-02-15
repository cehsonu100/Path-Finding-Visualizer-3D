// import logo from './logo.svg';
// import './App.css';
// import ReactDOM from 'react-dom'
// import { Physics, useCylinder, usePlane } from '@react-three/cannon'
import { Canvas } from '@react-three/fiber'
import Ground from './component/Ground.js'
import { OrbitControls, Environment } from '@react-three/drei'
// import { PlaneBufferGeometry } from 'three';
function App() {
  return (
    <div id="canvas-container">
      <Canvas dpr={[1, 1.5]} shadows camera={{ position: [0, 5, 15], fov: 50 }}>
        <fog attach="fog" args={['#171720', 10, 50]} />
        <Ground />
        <OrbitControls />
      </Canvas>

    </div>
  )
}

export default App;
