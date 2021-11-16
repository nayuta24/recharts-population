import { prefectures } from "./array/prefecture";
import { Checkbox } from "./components/checkbox/Checkbox";
import { PrefectureCheckboxes } from "./components/PrefectureCheckboxes";
import { Text } from "./components/text/Text";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text fontSize="15px">都道府県</Text>
      </header>
      <body>
        <PrefectureCheckboxes />
      </body>
    </div>
  );
}

export default App;
