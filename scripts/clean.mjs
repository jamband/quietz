import { rm } from "node:fs/promises";

await rm("node_modules", { recursive: true, force: true });
