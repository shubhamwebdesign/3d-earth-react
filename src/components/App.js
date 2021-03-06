import React, { Fragment, Suspense } from 'react'
import styled from 'styled-components'

import { Canvas } from '@react-three/fiber'
import Earth from './Earth/Earth'
import HeroText from './HeroText/HeroText'

function App() {
  return (
    <Fragment>
      <CanvasContainer>
        <HeroText />
        <Canvas>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </Fragment>
  )
}

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`

export default App
