// Original source: https://github.com/jxnblk/mdx-deck/blob/master/packages/gatsby-theme/src/components/app.js
import React, { useReducer, useState } from 'react'
import merge from 'lodash.merge'
import Webcam from 'react-webcam'
import Context from 'gatsby-theme-mdx-deck/src/context'
import { modes } from 'gatsby-theme-mdx-deck/src/constants'
import SettingsModal from './SettingsModal'
import useSettings from '../../settings'
import SettingsIcon from '@mui/icons-material/Settings'
import Button from '@mui/material/Button'

const WebcamAsBackground = () => {
  const { isCameraMirrored } = useSettings()
  const videoConstraints = {
    width: { min: 640, ideal: 1920, max: 1920 },
    height: { min: 400, ideal: 1080, max: 1080 },
    facingMode: 'user',
  }

  return (
    <Webcam
      mirrored={isCameraMirrored}
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
  const [showSettings, setShowSettings] = useState(false)

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
      <Button
        variant="contained"
        startIcon={<SettingsIcon />}
        onClick={() => setShowSettings(true)}
      >
        Settings
      </Button>
      <Context.Provider value={context}>{props.children}</Context.Provider>
      <SettingsModal
        show={showSettings}
        onClose={() => setShowSettings(false)}
      />
    </>
  )
}

export default App
