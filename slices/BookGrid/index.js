import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'

const BookGrid = ({ slice }) => (
  <section className="w-full mt-4 md:max-w-5xl">
    <span className="text-3xl title">
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

<div className="grid grid-cols-[50%_50%] md:grid-cols-[160px_160px_160px_160px_160px_160px] border-outer">
  { slice?.items?.map((item, i) => (
    <div className="rounded p-[20px] md:p-[30px] border-main grid-item">
        <div class="rounded">
      <PrismicNextImage field={item.bookImage} 
      imgixParams={{ sat: -30 }} 
      className="rounded-lg" />
    </div>
      <PrismicRichText field={item.bookTitle} components={{
    heading2: ({ children }) => <Heading>{children}</Heading>,
    paragraph: ({ children }) => <p className="text-gray-600 text-center text-[15px]">{children}</p>,
  }} />
      {/* <PrismicRichText field={item.bookAuthor} components={{
    heading1: ({ children }) => <Heading>{children}</Heading>,
    paragraph: ({ children }) => <p className="text-base text-gray-500">{children}</p>,
  }}/> */}
    {/* <img src={item.bookImage.url} alt={item.bookImage.alt} /> */}
  
    </div>
  
  )) }
</div>


  </section>
)

export default BookGrid