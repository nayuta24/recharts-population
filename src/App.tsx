import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Chart from "./components/chart/Chart";
import { PrefectureCheckboxes } from "./components/PrefectureCheckboxes";
import { Text } from "./components/text/Text";
import { useGetPrefectures } from "./hooks/useGetPrefectures";
import { prefectureState } from "./store/prefectureState";

function App() {
  const { getPrefectures } = useGetPrefectures();
  const prefectures = useRecoilValue(prefectureState);
  useEffect(() => {
    getPrefectures();
  }, []);

  useEffect(() => {
    console.log(prefectures);
  }, [prefectures]);

  return (
    <div className="App">
      <body>
        <Text fontSize="15px">都道府県</Text>
        <PrefectureCheckboxes />
        <Chart />
      </body>
    </div>
  );
}

export default App;
