import Image from "next/image";
import { NextSeo } from "next-seo";

import LinkWrapper from "@/components/LinkWrapper";

import { CloseOutline } from "@styled-icons/evaicons-outline";

import * as S from "./styles";

type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export type PlaceTemplateProps = {
  place: {
    slug: string;
    name: string;
    description: {
      html: string;
      text: string;
    };
    gallery: ImageProps[];
  };
};

export default function PlaceTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <NextSeo title={place.name} description={place.description.text} />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Voltar para o mapa" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || "" }}
          />
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
                draggable="false"
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
