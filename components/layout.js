import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

import Head from 'next/head'
import Link from 'next/link'

const name = 'Henry'
export const siteTitle = 'Next.js Sample Site'

const Layout = ({ children, home }) => {
  const { container, header, headerHomeImage, headerImage, backToHome } = styles
  const { borderCircle, heading2X, headingLg, colorInherit } = utilStyles

  // console.log(home)

  return (
    <div className={container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <header className={header}>
        {home ? (
          <>
            <img
              src='/images/profile.jpg'
              className={`${headerHomeImage} ${borderCircle}`}
              alt={name}
            />
            <h1 className={heading2X}>{name}</h1>
          </>
        ) : (
          <>
            <Link href='/'>
              <a>
                <img
                  src='/images/profile.jpg'
                  alt={name}
                  className={`${headerImage} ${borderCircle}`}
                />
              </a>
            </Link>
            <h2 className={headingLg}>
              <Link href='/'>
                <a className={colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={backToHome}>
          <Link href='/'>
            <a>Back to Home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Layout
