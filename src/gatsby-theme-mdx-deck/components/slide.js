/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui'
import useDeck from 'gatsby-theme-mdx-deck/src/hooks/use-deck'
import useSwipe from 'gatsby-theme-mdx-deck/src/hooks/use-swipe'
import Context from 'gatsby-theme-mdx-deck/src/context'
import { modes } from 'gatsby-theme-mdx-deck/src/constants'

export const Slide = ({ slide, index, preview }) => {
  const { theme } = useThemeUI()
  const outer = useDeck()
  const swipeProps = useSwipe()
  const context = {
    ...outer,
    index,
    preview,
  }

  return (
    <Context.Provider value={context}>
      <div
        style={{
          textShadow: `0 0 16px ${theme.colors.background}`,
          background: 'transparent',
        }}
        {...(!preview ? swipeProps : {})}
        sx={{
          boxSizing: 'border-box',
          width: '100%',
          height: context.mode === modes.print ? '100vh' : '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          position: 'relative',
          color: 'text',
          variant: 'styles.Slide',
        }}
      >
        {slide}
      </div>
    </Context.Provider>
  )
}

export default Slide
