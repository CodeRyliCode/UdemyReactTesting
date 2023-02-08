import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const SummaryForm = () => {
  const [checked, setChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered.</Popover.Body>
    </Popover>
  );

  const termsAndConditions = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
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
  );
};

export default SummaryForm;
