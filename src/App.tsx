import { prefectures } from "./array/prefecture";
import Chart from "./components/chart/Chart";
import { Checkbox } from "./components/checkbox/Checkbox";
import { PrefectureCheckboxes } from "./components/PrefectureCheckboxes";
import { Text } from "./components/text/Text";

function App() {
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
