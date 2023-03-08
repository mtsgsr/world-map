import LinkWrapper from "@/components/LinkWrapper";
import { CloseOutline } from "@styled-icons/evaicons-outline";

import * as S from "./styles";

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Heading>About</S.Heading>
      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quod,
          eum mollitia, distinctio aliquid magni in eos sit maiores atque
          corporis laudantium, tempore dolorem officiis iure consequatur
          reiciendis rem officia.
        </p>
      </S.Body>
    </S.Content>
  );
};

export default AboutTemplate;
