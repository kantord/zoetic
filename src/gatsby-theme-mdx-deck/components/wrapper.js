/** @jsx jsx */
// original source: https://github.com/jxnblk/mdx-deck/blob/master/packages/gatsby-theme/src/components/wrapper.js
import { jsx } from 'theme-ui'
import React, { Fragment, useState, useEffect } from 'react'
import useDeck from 'gatsby-theme-mdx-deck/src/hooks/use-deck'
import { modes } from 'gatsby-theme-mdx-deck/src/constants'
import Webcam from "react-webcam";

const DefaultProvider = props =>
  React.createElement(Fragment, null, props.children)

const WebcamAsBackground = React.memo(() => {
  const videoConstraints = {
    width: { min: 640, ideal: 1920, max: 1920 },
    height: { min: 400, ideal: 1080, max: 1080 },
    facingMode: "user"
  };

  return (
    <Webcam
      videoConstraints={videoConstraints}
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        objectFit: "cover",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1000,
      }}
    />
  )
})

export default props => {
  const [height, setHeight] = useState('100vh')
  const { mode, theme } = useDeck()

  useEffect(() => {
    // handle mobile safari height
    setHeight(window.innerHeight)
    const handleResize = e => {
      setHeight(window.innerHeight)
    }
    const stopTouch = e => {
      if (mode !== modes.normal) return
      e.preventDefault()
    }
    window.addEventListener('resize', handleResize)
    document.body.addEventListener('touchstart', stopTouch)
    return () => {
      window.removeEventListener('resize', handleResize)
      document.body.removeEventListener('touchstart', stopTouch)
    }
  }, [mode])

  const { Provider = DefaultProvider } = theme

  return (
    <Provider>
      <WebcamAsBackground />
      <div
        style={{
          background: "transparent"
        }}
        {...props}
        sx={{
          width: '100vw',
          height: mode !== modes.print ? height : '100vh',
          variant: 'styles.root',
          '*': {
            boxSizing: 'border-box',
          },
        }}
      />
    </Provider>
  )
}
