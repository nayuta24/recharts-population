import { memo, ReactNode, VFC } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  fontSize?: string;
};

export const Text: VFC<Props> = memo((props) => {
  const { children, fontSize } = props;
  return <SP fontSize={fontSize}>{children}</SP>;
});

const SP = styled.p<{ fontSize?: string }>`
  font-size: ${(props) => props.fontSize || "10px"};
`;
