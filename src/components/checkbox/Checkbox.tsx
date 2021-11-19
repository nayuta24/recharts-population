import { memo, useEffect, useState, VFC } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import { prefectureState } from "../../store/prefectureState";
import { prefecturesArrayType } from "../../type/prefecturesArrayType";
import { prefecturesType } from "../../type/prefectureType";

type Props = {
  label: string;
  number: number;
  index: number;
};

export const Checkbox: VFC<Props> = memo((props) => {
  const { label, number, index } = props;
  const [prefectures, setPrefectures] = useRecoilState(prefectureState);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  //
  const onChange = () => {
    if (prefectures) {
      const newPrefecture: prefecturesArrayType = [...prefectures];
      newPrefecture[index] = {
        number: newPrefecture[index].number,
        name: newPrefecture[index].name,
        isChecked: !newPrefecture[index].isChecked,
      };
      setPrefectures(newPrefecture);
    }
  };

  return (
    <>
      {prefectures && (
        <SLi key={number} data-testid="key">
          <input
            type="checkbox"
            onChange={onChange}
            checked={prefectures[index].isChecked}
          />
          <SLabel htmlFor="checkPrefecture">{label}</SLabel>
        </SLi>
      )}
    </>
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
