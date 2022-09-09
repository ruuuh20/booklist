// import * as prismic from '@prismicio/client'
// import * as prismicH from '@prismicio/helpers'
// import { enableAutoPreviews } from '@prismicio/next'
// import sm from './sm.json'

// export const endpoint = sm.apiEndpoint
// export const repositoryName = prismic.getRepositoryName(endpoint)

// // Update the Link Resolver to match your project's route structure
// export function linkResolver(doc) {
//   switch (doc.type) {
//     case 'homepage':
//       return '/'
//     case 'page':
//       return `/${doc.uid}`
//     default:
//       return null
//   }
// }

// // This factory function allows smooth preview setup
// export function createClient(config = {}) {
//   const client = prismic.createClient(endpoint, {
//     ...config,
//   })

//   enableAutoPreviews({
//     client,
//     previewData: config.previewData,
//     req: config.req,
//   })

//   return client
// }

import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'
import sm from './sm.json'

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return '/'
    case 'page':
      return `/${doc.uid}`
    default:
      return null
  }
}

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, config)

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}