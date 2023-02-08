import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

describe("Checkbox functionality testing", () => {
  test("Checkbox is unchecked by default", () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();
  });

  test("Checking checkbox on first click enables button", async () => {
    //setup method to create a user instance
    const user = userEvent.setup();

    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /Confirm Order/i });
    await user.click(checkbox);
    expect(button).toBeEnabled();
  });

  test("Unchecking checkbox again on second click disables button", async () => {
    //setup method to create a user instance
    const user = userEvent.setup();

    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
      name: /i agree to terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /Confirm Order/i });
    //First Click
    await user.click(checkbox);
    expect(button).toBeEnabled();
    //Second Click
    await user.click(checkbox);
    expect(button).toBeDisabled();
  });
});

describe("Popover functionality testing", () => {
test("popover responds to hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears on mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
})
