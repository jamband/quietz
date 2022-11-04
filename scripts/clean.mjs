import { rmSync } from "fs";

rmSync(".nuxt", { recursive: true, force: true });
rmSync(".output", { recursive: true, force: true });
rmSync("dist", { recursive: true, force: true });
rmSync("node_modules", { recursive: true, force: true });
