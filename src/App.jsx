import { useState } from 'react'
import Dither from './Dither.jsx';
import AmbitiousOceanTitle from './AmbitiousOceanTitle.jsx';
import './Dither.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
      <Dither
        waveColor={[0.5, 0.6, 1.0]}
        disableAnimation={false}
        enableMouseInteraction={false}
        mouseRadius={0.3}
        colorNum={5}
        waveAmplitude={0.15}
        waveFrequency={7.1}
        waveSpeed={0.04}
      />
      <AmbitiousOceanTitle />
    </div>
  )
}

export default App
