import React from "react";
import ReactDOM from "react-dom/client";

function ExampleComponent() {
  return (
    <div>
      <h1>This App!!!!!!!</h1>
      <p>Created today</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<ExampleComponent />);
