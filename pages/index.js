import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";

import { createClient } from "../prismicio";
import { PrismicText } from "@prismicio/react";
import { BookGrid } from "slices";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getAllByType("page");

  console.log(page[0].data);
  return {
    props: { page }, // Will be passed to the page component as props
  };
}

export default function Home({ page }) {
  return (
    <Layout>
      <Header />

      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container>
            <m.article variants={fade}>
              <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4">
                2022 Summer
              </h1>
              <h2>Student Report</h2>
              <h2>John Smith</h2>
              <div className="content max-w-3xl mb-4">
                <p>Semester: July 5 - Aug 20</p>
              </div>
            </m.article>

            {page.map((p, index) => (
              <div className="pt-16">
                <div className="flex flex-wrap">
                  <h4 className="text-2xl px-2 border-black border rounded-full items-center">
                    <PrismicText field={p.data.title} />
                  </h4>
                </div>
                <div>
                  <SliceZone slices={p.data.slices} components={components} />
                </div>
              </div>
            ))}
          </Container>
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}
