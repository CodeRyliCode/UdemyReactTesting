import React, { useState }from "react";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const SummaryForm = () => {
    const [checked, setChecked] = useState(false)
    const termsAndConditions = (
        <span>
            I agree to
            <span style={{color: "skyblue" }}> Terms and Conditions</span>
        </span>
    );
  return (
    <>
<Form>
    <Form.Group controlId="terms-and-conditions">
    <Form.Check
    type="checkbox"
    label={termsAndConditions}
    checked={checked}
    onChange={(e) => setChecked(e.target.checked)}
    />
    </Form.Group>
</Form>
<Button controlId="SummaryButton" type="submit" disabled={!checked}>
Confirm Order
</Button>
</>
)};

export default SummaryForm;
