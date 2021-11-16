import { memo, VFC } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { prefectureState } from "../store/prefectureState";
import { prefecturesType } from "../type/prefectureType";
import { Checkbox } from "./checkbox/Checkbox";

type Props = {
  prefectures: [prefecturesType];
};

export const PrefectureCheckboxes: VFC<Props> = memo((props) => {
  const { prefectures } = props;
  return (
    <SDiv>
      <ul>
        {prefectures.map((prefecture, i) => (
          <Checkbox label={prefecture.name} key={i} />
        ))}
      </ul>
    </SDiv>
  );
});

const SDiv = styled.div`
  width: 100%;
`;
