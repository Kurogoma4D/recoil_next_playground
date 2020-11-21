import { AppProps } from 'next/dist/next-server/lib/router/router'
import { RecoilRoot } from 'recoil';
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default App;