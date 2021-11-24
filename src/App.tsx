import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Chart } from "./components/chart/Chart";
import { PrefectureCheckboxes } from "./components/PrefectureCheckboxes";
import { Text } from "./components/text/Text";
import { useGetPopulation } from "./hooks/useGetPopulation";
import { useGetPrefectures } from "./hooks/useGetPrefectures";
import { prefectureState } from "./store/prefectureState";

function App() {
  const { getPrefectures } = useGetPrefectures();
  const prefectures = useRecoilValue(prefectureState);
  // ページをローディングした直後の一回のみ、apiから県の情報を取得する
  useEffect(() => {
    getPrefectures();
  }, []);

  const { getPopulation, population } = useGetPopulation();

  // 県がチェックされるたびに更新
  useEffect(() => {
    getPopulation();
  }, [prefectures]);

  return (
    <div className="App">
      <Text fontSize="15px">都道府県</Text>
      {/* 各県の情報をapiから取得でき次第「PrefectureCheckboxes」を表示する */}
      {prefectures ? (
        <PrefectureCheckboxes prefectures={prefectures} />
      ) : (
        <Text>ロード中です</Text>
      )}
      <Chart data={population} />
    </div>
  );
}

export default App;
