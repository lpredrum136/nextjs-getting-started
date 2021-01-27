import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

const Home = ({ allPostsData }) => {
  const {
    headingLg,
    list,
    listItem,
    lightText,
    headingMd,
    padding1px
  } = utilStyles
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={headingMd}>
        <p>Henry Web Dev</p>
        <p>
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>
        </p>
      </section>

      <section className={`${headingMd} ${padding1px}`}>
        <h2 className={headingLg}>Blog</h2>
        <ul className={list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <h3>{id}</h3>
              <br />
              <small className={lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => ({
  props: {
    allPostsData: getSortedPostsData()
  }
})

export default Home
