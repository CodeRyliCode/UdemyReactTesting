import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

describe("checkbox functionality testing", () => {
  test("Checkbox is unchecked by default", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();
  });

  test("Checking checkbox on first click enables button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /Confirm Order/i });
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
  });

  test("Unchecking checkbox again on second click disables button", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /Confirm Order/i });
    //First Click
    fireEvent.click(checkbox);
    expect(button).toBeEnabled();
    //Second Click
    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});
