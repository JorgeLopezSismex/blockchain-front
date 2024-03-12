"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "100",
});

import "bootstrap/dist/css/bootstrap.css";
import WebNavBar from "@/components/web/WebNavBar";
import { Fragment } from "react";
import WebStart from "@/components/web/WebStart";
import WebWhatIs from "@/components/web/WebWhatIs";
import WebWhatIsItFor from "@/components/web/WhatIsItFor";
import Features from "@/components/web/Features";
import { Html } from "next/document";

export default function Home() {
  return (
    <Fragment>
      <WebNavBar></WebNavBar>
      <WebStart />
      <WebWhatIs />
      <WebWhatIsItFor></WebWhatIsItFor>
      <Features></Features>
    </Fragment>
  );
}
