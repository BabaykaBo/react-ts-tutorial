import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

const App = () => {
  return <div>Hello World</div>;
};

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(<App />);
}

// ReactDOM.render(<App />, document.getElementById("root"));
