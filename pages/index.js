import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/components/container";
import Main from "../components/Main";
import { fade } from "@/helpers/transitions";
import { LazyMotion, domAnimation, m } from "framer-motion";
import useInvite from "@/components/hooks/useInvite";
import { createClient } from "../prismicio";
import { PrismicText } from "@prismicio/react";
import { BookGrid } from "slices";
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
import AssignmentsList from "../components/assignmentsList";
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getAllByType("page");

  console.log(page[0].data);
  return {
    props: { page }, // Will be passed to the page component as props
  };
}

export default function Home({ page }) {
  const { inviteResponse, error, updating, updateRsvp } = useInvite();
  if (error) {
    return <div>{error}</div>;
  }
  if (!inviteResponse) {
    return <div>no invite </div>;
  }
  function onRsvpChange(e) {
    const purchasing = e.target.value === "yes";
    updateRsvp(purchasing);
  }

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
                2022 Fall Semester
              </h1>
              <h2>Student Report</h2>

              <div className="content max-w-3xl mb-4">
                <p>Dates: Sept 5 - Jane 10, 2022</p>
              </div>
            </m.article>
            <div className="relative h-full flex overflow-hidden overflow-y-auto">
              <aside className="aside-left w-full md:w-[350px]">
                <div className="main-menu relative">
                  <div className="mt-6 rounded-30 bg-white widget">
                    <p>Title</p>
                    <p>blah blah</p>
                  </div>
                  <div className="mt-6 rounded-30 bg-white widget">Books</div>

                  <div className="mt-6 rounded-30 bg-white widget w-full text-gray-500">
                    <p>If you have any questions, please contact us:</p>
                    <p className="text-sm">(201) 123-4567</p>
                    <p className="text-sm">info@peakeducenter.com</p>
                    <p className="text-sm">317 Harrington Ave, Closter NJ</p>
                  </div>
                </div>
              </aside>
              <main className="pl-4 w-full">
                <div>
                  <h1 className="">{inviteResponse.messages.title}</h1>

                  <div className="">
                    <h3 className="text-max">
                      Hello, <strong>{inviteResponse.invite.name}</strong>!
                    </h3>
                    <p>Welcome to {inviteResponse.invite.currentCourse}</p>
                    <p>The class meets on {inviteResponse.messages.meetings}</p>
                    <p>{inviteResponse.messages.invitation}</p>
                    <fieldset className="" disabled={updating}>
                      <legend>{inviteResponse.messages.question}</legend>

                      <label htmlFor="yes" className="form-control">
                        <input
                          type="radio"
                          id="yes"
                          name="purchasing"
                          value="yes"
                          onChange={onRsvpChange}
                          checked={inviteResponse.invite.purchasing === true}
                        />
                        {inviteResponse.messages.answer1}
                      </label>

                      <label htmlFor="no" className="form-control">
                        <input
                          type="radio"
                          id="no"
                          name="purchasing"
                          value="no"
                          onChange={onRsvpChange}
                          checked={inviteResponse.invite.purchasing === false}
                        />
                        {inviteResponse.messages.answer2}
                      </label>
                    </fieldset>
                  </div>
                  <div>
                    <SliceZone
                      slices={page[0].data.slices}
                      components={components}
                    />
                  </div>
                  <AssignmentsList />
                </div>
              </main>
            </div>

            {/* {page.map((p, index) => (
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
            ))} */}
          </Container>
        </m.main>
      </LazyMotion>

      <Footer />
    </Layout>
  );
}
