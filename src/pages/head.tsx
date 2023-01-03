import React from "react";

import { bio } from "../utils/bio";

export default function Head() {
  return (
    <>
      <title>Ryan Oliveira Brito - Front-end Developer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={bio} />
      <meta
        property="og:title"
        content="Ryan Oliveira Brito - Front-end Developer"
      />
      <meta property="og:description" content={bio} />
      <meta property="og:type" content="website" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </>
  );
}
