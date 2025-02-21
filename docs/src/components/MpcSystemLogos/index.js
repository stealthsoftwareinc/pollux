//
// Copyright (C) 2025 Stealth Software Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without
// restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following
// conditions:
//
// The above copyright notice and this permission notice (including
// the next paragraph) shall be included in all copies or
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.
//
// SPDX-License-Identifier: MIT
//

import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const list = [
  {
    alt: "Divvi Up",
    src: "mpc-system-logos/divvi-up.svg",
    url: "https://divviup.org/",
  },
];

function MpcSystemLogo({alt, src, url}) {
  return (
    <a href={url} target="_blank"><img alt={alt} src={src} /></a>
  );
}

export default function MpcSystemLogos() {
  return (
    <section>
      <div className="container text--center">
        <Heading as="h2">Supported MPC systems</Heading>
        <div className={styles.logos}>
          {list.map((props, idx) => (
            <MpcSystemLogo key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
