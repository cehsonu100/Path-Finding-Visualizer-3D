export default function Ground() {
  return (
      <mesh >
          <planeGeometry args={[1,1]} position={[1, -2, 0]} rotation={[0,-Math.PI/4,0]} />
          <meshStandardMaterial color="#303030" />
      </mesh>
  ) 
}
