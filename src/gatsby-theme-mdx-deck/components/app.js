// Original source: https://github.com/jxnblk/mdx-deck/blob/master/packages/gatsby-theme/src/components/app.js
import React, { useReducer } from 'react'
import merge from 'lodash.merge'
import Webcam from 'react-webcam'
import Context from 'gatsby-theme-mdx-deck/src/context'
import { modes } from 'gatsby-theme-mdx-deck/src/constants'

const WebcamAsBackground = () => {
  const videoConstraints = {
    width: { min: 640, ideal: 1920, max: 1920 },
    height: { min: 400, ideal: 1080, max: 1080 },
    facingMode: 'user',
  }

  return (
    <Webcam
      mirrored={true}
      videoConstraints={videoConstraints}
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        objectFit: 'cover',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1000,
      }}
    />
  )
}

const reducer = (state, next) =>
  typeof next === 'function'
    ? merge({}, state, next(state))
    : merge({}, state, next)

const App = (props) => {
  const [state, setState] = useReducer(reducer, {
    mode: modes.normal,
    step: 0,
    metadata: {},
  })

  const register = (index, key, value) => {
    if (state.metadata[index] && state.metadata[index][key]) return
    setState({
      metadata: {
        [index]: {
          [key]: value,
        },
      },
    })
  }

  const context = {
    ...state,
    setState,
    register,
  }

  return (
    <>
      <WebcamAsBackground />
      <Context.Provider value={context}>{props.children}</Context.Provider>
    </>
  )
}

export default App
