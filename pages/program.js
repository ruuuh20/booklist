import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";

import Link from "next/link";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Main } from "next/document";

export default function Program() {
  return (
    <Layout>
      <Header />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <Container>
            <m.div variants={fade}>
              <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4">
                Welcome
              </h1>
              <div className="content max-w-3xl mb-4">
                <p>
                  Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>

              <Link href="/">
                <a>Go Home</a>
              </Link>
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>
      <Main />

      <Footer />
    </Layout>
  );
}
