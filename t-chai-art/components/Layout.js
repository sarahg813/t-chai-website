import React, { Component } from "react";
import "../sass/main.scss";
import Head from "next/head";
import MainNavbar from "./MainNavbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faEnvelope);

export default ({ children, title = "This is the default title" }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>

    <header className="header">
      <MainNavbar />
    </header>

    {children}
  </div>
);
