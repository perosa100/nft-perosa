// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head></Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: themeInitializerScript
            }}
          ></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// This function needs to be a String
const themeInitializerScript = `(function() {
	${setInitialColorMode.toString()}
	setInitialColorMode();
})()
`

function setInitialColorMode() {
  // Check initial color preference
  function getInitialColorMode() {
    const persistedPreferenceMode = window.localStorage.getItem('theme')
    const hasPersistedPreference = typeof persistedPreferenceMode === 'string'

    if (hasPersistedPreference) {
      return persistedPreferenceMode
    }

    // Check the current preference
    const preference = window.matchMedia('(prefers-color-scheme: dark)')
    const hasMediaQueryPreference = typeof preference.matches === 'boolean'

    if (hasMediaQueryPreference) {
      return preference.matches ? 'dark' : 'light'
    }

    return preference.matches
  }

  const currentColorMode = getInitialColorMode()
  const element = document.documentElement
  element.style.setProperty('--initial-color-mode', currentColorMode)

  // If darkmode apply darkmode
  if (currentColorMode === 'dark')
    window.document.documentElement.classList.add('dark')
}

export default MyDocument
