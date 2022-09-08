import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

const BookGrid = ({ slice }) => (
  <section className="w-full md:max-w-4xl">
    <span className="title text-2xl">
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
      <PrismicRichText field={slice.primary.description}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }

<div className="grid grid-cols-[160px_160px_156px_160px] gap-8">
  { slice?.items?.map((item, i) => (
    <div className="rounded">
        <div class="rounded">
      <PrismicNextImage field={item.bookImage} imgixParams={{ sat: -40 }} className="rounded-lg" />
    </div>
      <PrismicRichText field={item.bookTitle} components={{
    heading1: ({ children }) => <Heading>{children}</Heading>,
    paragraph: ({ children }) => <p className="text-gray-500 text-[12px] font-bold">{children}</p>,
  }} />
      {/* <PrismicRichText field={item.bookAuthor} components={{
    heading1: ({ children }) => <Heading>{children}</Heading>,
    paragraph: ({ children }) => <p className="text-gray-500 text-base">{children}</p>,
  }}/> */}
    {/* <img src={item.bookImage.url} alt={item.bookImage.alt} /> */}
  
    </div>
  
  )) }
</div>


  </section>
)

export default BookGrid