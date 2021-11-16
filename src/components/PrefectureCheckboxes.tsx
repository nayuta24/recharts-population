import styled from "styled-components";
import { prefectures } from "../array/prefecture";
import { Checkbox } from "./checkbox/Checkbox";

export const PrefectureCheckboxes = () => {
  return (
    <SDiv>
      <ul>
        {prefectures.map((prefecture, i) => (
          <Checkbox label={prefecture} key={i} />
        ))}
      </ul>
    </SDiv>
  );
};

const SDiv = styled.div`
  width: 100%;
  text-align: left;
  border: 1.5px solid;
  border-color: #031de2;
  border-radius: 15px;
`;
