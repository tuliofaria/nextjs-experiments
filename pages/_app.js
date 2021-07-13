import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from 'next/link'

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <p>
        <Link href='/'>
          <a>Home</a>
        </Link>{' '}
        /{' '}
        <Link href='/about'>
          <a>About</a>
        </Link>
      </p>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <style>
        {`
        body {
          padding: 0;
          margin: 0;
          background: #f9fbf8;
        }
        * {
          box-sizing: border-box;
          font-family: Helvetica, sans-serif;
          font-weight: 900;
          color: #222;
        }
      `}
      </style>
    </>
  )
}

export default MyApp
