import styled from "styled-components";

import { prefectures } from "../array/prefecture";
import { Checkbox } from "../components/checkbox/Checkbox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>都道府県</h1>
        <ul>
          {prefectures.map((prefecture, i) => (
            <Checkbox label={prefecture} key={i} />
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
