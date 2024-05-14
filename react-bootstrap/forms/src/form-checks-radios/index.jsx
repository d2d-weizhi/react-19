import Form from 'react-bootstrap/Form';

export function CheckExample() {
  return (
    <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
          />
          <Form.Check
            disabled
            type={type}
            label={`disabled ${type}`}
            id={`disabled-default-${type}`}
          />
        </div>
      ))}
    </Form>
  );
}

export function SwitchExample() {
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Check this switch"
      />
      <Form.Check
        disabled
        type="switch"
        label="disabled switch"
        id="disabled-custom-switch"
      />
    </Form>
  );
}

export function CheckInlineExample() {
  return (
    <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="2"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            disabled
            label="3 (disabled)"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
    </Form>
  );
}

export function CheckReverseExample() {
  return (
    <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`reverse-${type}`} className="mb-3">
          <Form.Check
            reverse
            label="1"
            name="group1"
            type={type}
            id={`reverse-${type}-1`}
          />
          <Form.Check
            reverse
            label="2"
            name="group1"
            type={type}
            id={`reverse-${type}-2`}
          />
          <Form.Check
            reverse
            disabled
            label="3 (disabled)"
            type={type}
            id={`reverse-${type}-3`}
          />
        </div>
      ))}
    </Form>
  );
}

export function NoLabelExample() {
  return (
    <>
      <Form.Check aria-label="option 1" />
      <Form.Check type="radio" aria-label="radio 1" />
    </>
  );
}

export function CheckApiExample() {
  return (
    <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={type} className="mb-3">
          <Form.Check type={type} id={`check-api-${type}`}>
            <Form.Check.Input type={type} isValid />
            <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
            <Form.Control.Feedback type="valid">
              You did it!
            </Form.Control.Feedback>
          </Form.Check>
        </div>
      ))}
    </Form>
  );
}