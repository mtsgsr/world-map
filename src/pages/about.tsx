import client from "@/graphql/client";
import { GET_PAGES } from "@/graphql/queries";
import AboutTemplate from "@/templates/About";

export default function About() {
  <AboutTemplate />;
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES);

  return {
    props: {},
  };
};
