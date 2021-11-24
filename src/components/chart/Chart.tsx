import { useCallback, useEffect, useState, VFC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

type Props = {
  data: Object[];
};

export const Chart: VFC<Props> = (props) => {
  const { data } = props;

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
      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
      <YAxis type="number" domain={[0, 8000000]} tick={{ fontSize: 12 }} />
      <Legend />
      <Line type="monotone" dataKey="熊本県" stroke="#8884d8" />
      <Line type="monotone" dataKey="北海道" stroke="#82ca9d" />
      <Line type="monotone" dataKey="長崎県" stroke="blue" />
      <Line type="monotone" dataKey="東京都" stroke="blue" />
      <Line type="monotone" dataKey="大阪府" stroke="blue" />
    </LineChart>
  );
};
