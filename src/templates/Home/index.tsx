import dynamic from "next/dynamic";

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
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  );
}
