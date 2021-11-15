import { VFC } from "react";
import styled from "styled-components";

type Props = {
  label: string;
  key?: number;
};

export const Checkbox: VFC<Props> = (props) => {
  const { label, key } = props;
  return (
    <SLi key={key} data-testid="key">
      <input type="checkbox" />
      <label htmlFor="checkPrefecture">{label}</label>
    </SLi>
  );
};

const SLi = styled.li`
  list-style: none;
`;