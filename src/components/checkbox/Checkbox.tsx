import { memo, VFC } from "react";
import styled from "styled-components";

type Props = {
  label: string;
  key?: number;
};

export const Checkbox: VFC<Props> = memo((props) => {
  const { label, key } = props;
  return (
    <SLi key={key} data-testid="key">
      <input type="checkbox" />
      <SLabel htmlFor="checkPrefecture">{label}</SLabel>
    </SLi>
  );
});

const SLi = styled.li`
  display: inline;
  list-style: none;
  white-space: nowrap;
  padding-right: 10px;
`;

const SLabel = styled.label`
  font-size: 12px;
`;
