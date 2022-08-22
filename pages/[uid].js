import { createClient, linkResolver } from '../prismicio'
import * as prismicH from '@prismicio/helpers';

export default function Homepage({ page }) {
  console.log(page)
  return <h1>{page.uid}</h1>
}



export async function getStaticPaths() {
  const client = createClient()
  const documents = await client.getAllByType('page')
  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: true,
  }
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', params.uid)

  return {
    props: { page },
  }
}