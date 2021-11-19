import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Chart from "./components/chart/Chart";
import { PrefectureCheckboxes } from "./components/PrefectureCheckboxes";
import { Text } from "./components/text/Text";
import { useGetPrefectures } from "./hooks/useGetPrefectures";
import { prefectureState } from "./store/prefectureState";
import { prefecturesArrayType } from "./type/prefecturesArrayType";
import { prefecturesType } from "./type/prefectureType";

function App() {
  const { getPrefectures } = useGetPrefectures();
  const prefectures = useRecoilValue(prefectureState);
  // ページをローディングした直後の一回のみ、apiから県の情報を取得する
  useEffect(() => {
    getPrefectures();
  }, []);

  // 各県の情報が変更されたら更新する
  // const [prefs, setPrefs] = useState<prefecturesArrayType>();
  // useEffect(() => {
  //   console.log(prefectures);
  //   setPrefs(prefectures);
  // }, [prefectures]);

  return (
    <div className="App">
      <body>
        <Text fontSize="15px">都道府県</Text>
        {/* 各県の情報をapiから取得でき次第「PrefectureCheckboxes」を表示する */}
        {prefectures ? (
          <PrefectureCheckboxes prefectures={prefectures} />
        ) : (
          <Text>ロード中です</Text>
        )}
        <Chart />
      </body>
    </div>
  );
}

export default App;
