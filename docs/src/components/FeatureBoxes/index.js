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
import clsx from "clsx";
import styles from "./styles.module.css";

const list = [
  {
    title: "Simple tooling",
    body: (
      <>
        Pollux lets you easily deploy components using only Docker
        Compose, and optionally Terraform and your existing cloud
        provider.
        No extra tools or subscriptions needed.
      </>
    ),
  },
  {
    title: "Infrastructure as code",
    body: (
      <>
        Pollux provides the code to deploy your components and only
        requires you to edit simple configuration files, minimizing
        error-prone manual processes.
        Deployments are quick to create and destroy.
      </>
    ),
  },
  {
    title: "Extensible architecture",
    body: (
      <>
        Pollux is designed for extensibility, seamlessly integrating
        with any Docker-enabled system and any cloud provider.
        For more complex requirements, you can extend Pollux to fit your
        needs.
      </>
    ),
  },
];

function FeatureBox({title, body}) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default function FeatureBoxes() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {list.map((props, idx) => (
            <FeatureBox key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
