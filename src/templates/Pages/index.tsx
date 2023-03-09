import { NextSeo } from "next-seo";

import LinkWrapper from "@/components/LinkWrapper";

import { CloseOutline } from "@styled-icons/evaicons-outline";

import * as S from "./styles";

export type PageTemplateProps = {
  page: {
    heading: string;
    body: {
      html: string;
      text: string;
    };
  };
};

export default function PageTemplate({ page }: PageTemplateProps) {
  return (
    <>
      <NextSeo title={page.heading} description={page.body.text} />
      <S.Content>
        <LinkWrapper href="/">
          <CloseOutline size={32} />
        </LinkWrapper>
        <S.Heading>{page.heading}</S.Heading>
        <S.Body>
          <div dangerouslySetInnerHTML={{ __html: page.body.html }} />
        </S.Body>
      </S.Content>
    </>
  );
}
