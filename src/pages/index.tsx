import { MapProps } from "@/components/Map";
import client from "@/graphql/client";
import { GetPlacesQuery } from "@/graphql/generated/graphql";
import { GET_PLACES } from "@/graphql/queries";
import HomeTemplate from "@/templates/Home";

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />;
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES);

  return {
    props: {
      places,
    },
  };
};
