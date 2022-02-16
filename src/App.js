// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
// import { Physics, useCylinder, usePlane } from '@react-three/cannon'
import DATGUI from 'react-dat-gui'
import { Canvas, render, events } from '@react-three/fiber'
import Ground from './component/Ground.js'
import { OrbitControls, TransformControls } from '@react-three/drei'


function App() {
  console.log(DATGUI);
  const [size, setSize] = useState({width:window.innerWidth, height:window.innerHeight});
  window.addEventListener('resize',()=>{
    setSize({width:window.innerWidth, height:window.innerHeight})
  })

  
  return (
    <div id="canvas-container" style = {{width: size.width, height: size.height}}>
      <Canvas pixelRatio={window.devicePixelRatio} dpr={[1, 1.5]} shadows camera={{ position: [0, 0, 3], fov: 50 }} render={{ scroll: true, debounce: { scroll: 50, resize: 1}}} >
        <fog attach="fog" args={['#171720', 10, 50]} />
        <Ground/>

        <OrbitControls />
      </Canvas>

    </div>
  )
}

export default App;
