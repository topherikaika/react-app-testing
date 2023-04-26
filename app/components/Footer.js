import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="border-top text-center small text-muted py-3">
      <p>
        <a href="/" class="mx-1">
          Home
        </a>{" "}
        |{" "}
        <a class="mx-1" href="/about-us">
          About Us
        </a>{" "}
        |{" "}
        <a class="mx-1" href="/terms">
          Terms
        </a>
      </p>
      <p class="m-0">
        Copyright &copy; {new Date().getFullYear()}
        <a href="/" class="text-muted">
          ComplexApp
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
