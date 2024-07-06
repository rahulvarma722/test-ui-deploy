import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
export default defineConfig([
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "es",
      name: "test-ui-deploy",
    },
    external: ["react", "react-dom", "@emotion/css"],
    plugins: [
      typescript({
        tsconfig: "tsconfig.json",
      }),
    ],
  },
  {
    input: "src/components.ts",
    output: {
      dir: "dist",
      format: "es",
      name: "test-ui-deploy",
    },
    external: ["react", "react-dom", "@emotion/css"],
    plugins: [
      typescript({
        tsconfig: "tsconfig.json",
      }),
    ],
  },
  {
    input: "src/settings.ts",
    output: {
      dir: "dist",
      format: "es",
      name: "test-ui-deploy",
    },
    external: ["react", "react-dom", "@emotion/css"],
    plugins: [
      typescript({
        tsconfig: "tsconfig.json",
      }),
    ],
  },
]);
