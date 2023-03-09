import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

import { InfoOutline } from "@styled-icons/evaicons-outline";

import LinkWrapper from "@/components/LinkWrapper";
import Loading from "@/components/Loading";
import { MapProps } from "@/components/Map";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Mapa mundial"
        description="Um projeto para mostrar algo sobre diversos lugadores do mundo"
        canonical="https://mtsgsr-worldmap.vercel.app/"
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
