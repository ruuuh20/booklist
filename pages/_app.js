import '../styles/main.css'
import React from 'react';
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio.js'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
     <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>
            {children}
          </a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>


      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
          </PrismicPreview>
    </PrismicProvider>
    </>
  )
}