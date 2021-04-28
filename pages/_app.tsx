
import { Header } from '../public/src/components/Header'
import '../public/src/styles/global.scss'

import styles from '../public/src/styles/app.module.scss'
import { Player } from '../public/src/components/Player'
import { PlayerContextProvider } from '../public/src/contexts/PlayerContext'


function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
    <div className={styles.wrapper}>
        <main>
        <Header />  
        <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider >
  )
}

export default MyApp
