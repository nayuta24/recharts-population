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

const defaultData = [
  {
    name: "1980",
    amt: 2400,
  },
  {
    name: "1990",
    amt: 2210,
  },
  {
    name: "2000",
    amt: 2290,
  },
  {
    name: "2010",
    amt: 2000,
  },
  {
    name: "2020",
    amt: 2181,
  },
];

export const Chart = () => {
  const { getPopulation, population } = useGetPopulation();
  const prefectures = useRecoilValue(prefectureState);
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    getPopulation(1);
    console.log(population);
  }, []);

  useEffect(() => {
    prefectures?.map((prefecture) => {
      if (prefecture.isChecked) {
        getPopulation(prefecture.number);
        console.log(population);
      }
    });
  }, [prefectures]);

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);

  return (
    <LineChart
      width={350}
      height={240}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="熊本" stroke="#8884d8" />
      <Line type="monotone" dataKey="北海道" stroke="#82ca9d" />
    </LineChart>
  );
};
