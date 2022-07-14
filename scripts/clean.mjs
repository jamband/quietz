import { rmSync } from "fs";

/** @type {import("fs").RmOptions} */
const options = {
  recursive: true,
  force: true,
};

rmSync(".nuxt", options);
rmSync(".output", options);
rmSync("dist", options);
rmSync("node_modules", options);
