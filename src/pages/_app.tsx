import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { AppProps } from 'next/app'

import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default App
