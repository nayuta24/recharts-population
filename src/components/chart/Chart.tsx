import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useRecoilValue } from "recoil";
import { useGetPopulation } from "../../hooks/useGetPopulation";
import { prefectureState } from "../../store/prefectureState";

export const Chart = () => {
  const { getPopulation, population } = useGetPopulation();
  const prefectures = useRecoilValue(prefectureState);
  const [data, setData] = useState([{}]);
  // 県がチェックされるたびに更新
  useEffect(() => {
    getPopulation();
  }, [prefectures]);

  // 「getPopulation()」の処理が終了し、populationが更新されたらデータを更新する
  useEffect(() => {
    // setData([...population]);
    console.log(population);
  }, [population]);

  // きちんとデータが更新されたかを確認する
  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);

  return (
    <LineChart
      width={350}
      height={240}
      data={population}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
      <YAxis type="number" domain={[0, 8000000]} tick={{ fontSize: 12 }} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="熊本県" stroke="#8884d8" />
      <Line type="monotone" dataKey="北海道" stroke="#82ca9d" />
      <Line type="monotone" dataKey="長崎県" stroke="blue" />

      {prefectures &&
        prefectures.map((prefecture) => {
          if (prefecture.isChecked) {
            <Line type="monotone" dataKey={prefecture.name} stroke="#82ca9d" />;
          }
        })}
    </LineChart>
  );
};
