import { useState } from "react";

function Alert({ type = "information", heading, children, closable, onClose }) {
  const [visible, setVisible] = useState(true);
  if (!visible) {
    return null;
  }

  function onCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }

  return (
    <div>
      <div>
        <span
          role="img"
          aria-label={type === "warning" ? "Warning" : "Information"}
        >
          {type === "warning" ? "⚠" : "ℹ️"}
        </span>
        <span style={{ marginLeft: 8, marginRight: 8 }}>{heading}</span>
        {closable && (
          <button aria-label="Close" onClick={onCloseClick}>
            <span role="img" aria-label="Close">
              ❌
            </span>
          </button>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}

export { Alert };
