import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";

function ExampleComponent() {
  return (
    <>
      <Header />x
      <footer className="border-top text-center small text-muted py-3">
        <p>
          <a href="/" className="mx-1">
            Home
          </a>{" "}
          |{" "}
          <a className="mx-1" href="/about-us">
            About Us
          </a>{" "}
          |{" "}
          <a className="mx-1" href="/terms">
            Terms
          </a>
        </p>
        <p className="m-0">
          Copyright &copy; 2020{" "}
          <a href="/" className="text-muted">
            ComplexApp
          </a>
          . All rights reserved.
        </p>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<ExampleComponent />);

if (module.hot) {
  module.hot.except();
}
