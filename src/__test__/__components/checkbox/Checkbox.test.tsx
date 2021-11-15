import "@testing-library/react";
import { render, screen } from "@testing-library/react";

import { Checkbox } from "../../../components/checkbox/Checkbox";

it("checkboxに与えられた県名が正しく描画されるか", () => {
  render(<Checkbox label="北海道" />);
  expect(screen.getByText("北海道"));
});
