import { memo } from "react";
import styled from "styled-components";
import { prefectures } from "../array/prefecture";
import { Checkbox } from "./checkbox/Checkbox";

export const PrefectureCheckboxes = memo(() => {
  return (
    <SDiv>
      <ul>
        {prefectures.map((prefecture, i) => (
          <Checkbox label={prefecture} key={i} />
        ))}
      </ul>
    </SDiv>
  );
});

const SDiv = styled.div`
  width: 100%;
`;
