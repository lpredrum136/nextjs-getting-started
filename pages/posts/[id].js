import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

const Post = ({ postData }) => {
  const { id, title, date } = postData
  const { headingXl, lightText } = utilStyles

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={headingXl}>{title}</h1>
        <h2>{id}</h2>
        <div className={lightText}>
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths = async () => ({
  paths: getAllPostIds(),
  fallback: false
})

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default Post
