import "./styles.css";
import { Alert } from "./Alert";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Alert heading="Success" closable onClose={() => console.log("closed")}>
        Everything is really good!
      </Alert>
    </div>
  );
}
