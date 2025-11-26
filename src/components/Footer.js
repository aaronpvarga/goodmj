import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container mx-auto py-4 flex flex-col gap-8 m-8 px-4">
      <footer className="flex flex-col sm:flex-row px-0 justify-between items-center sm:px-4 gap-8 sm:gap-0">
        <p className="text-white text-sm sm:text-base text-center sm:text-left">
          &copy; Copyright 2025{" "}
          <a
            href="https://github.com/aaronpvarga"
            target="_blank"
            rel="noreferrer"
            className="underline hover:no-underline"
          >
            Aaron P. Varga
          </a>
          . All rights reserved.
        </p>
        <a
          href="https://github.com/aaronpvarga"
          target="_blank"
          rel="noreferrer"
          aria-label="Aaron P. Varga | GitHub"
        >
          <FontAwesomeIcon icon={faGithub} className="text-2xl text-white" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
