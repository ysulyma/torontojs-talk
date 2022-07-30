/** Code samples. */
export const samples = {
  audioFormats: `import {Audio} from "liqvid";

<Audio>
  <source src="./audio/audio.webm" type="audio/webm" />
  <source src="./audio/audio.mp4" type="audio/mp4" />
  <track kind="captions" srcLang="en" src="./captions.vtt" />
</Audio>`,

  buildCommand: `tsc --outDir dist/esm --module esnext
tsc --outDir dist/cjs --module commonjs
node ../../build.mjs`,

  buildMjs: `// build.mjs regex-replaces this
import {mixedCaseVals} from "./mixedCaseVals";

// with this
import {mixedCaseVals} from "./mixedCaseVals.mjs";`,

  dist: `dist/
  cjs/
    index.cjs
    mixedCaseVals.cjs
    react.cjs
  esm/
    index.mjs
    mixedCaseVals.mjs
    react.mjs
  types/
    index.d.ts
    mixedCaseVals.d.ts
    react.d.ts`,

  fakeFullscreen: `iframe.fake-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  height: var(--vh);
  width: var(--vw);
  z-index: 10000;
}

@media (orientation: portrait) {
  iframe.fake-fullscreen {
    transform: rotate(-90deg);
    transform-origin: top left;
    left: 0;
    top: 100%;
    width: var(--vh);
    height: var(--vw);
  }
}`,

  packageJson: `  "exports": {
    ".": {
      "import": "./dist/esm/index.mjs",
      "require": "./dist/cjs/index.cjs"
    },
    "./react": {
      "import": "./dist/esm/react.mjs",
      "require": "./dist/cjs/react.cjs"
    }
  },
  "typesVersions": {
    "*": {
      "*": [
        "./dist/types/*.d.ts"
      ]
    }
  }`,

  onClick: `import {onClick} from "@liqvid/utils/react";
import {useMemo} from "react";

const events = useMemo(() => onClick<HTMLButtonElement>(e => {
  /* ... */
}), []);

<button {...events}>Click me</button>`,

  replayData: `/** Type representing recorded data. */
type ReplayData<T> = [number, T][];`,

  safari10: `/* webpack.config.js */

module.exports = {
  // necessary due to bug in old versions of mobile Safari
  devtool: false,

  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          safari10: true
        }
      })
    ]
  }
}`,

  viewport: `const setDims = () => {
  document.body.style.setProperty("--vh", \`\${window.innerHeight}px\`);
  document.body.style.setProperty("--vw", \`\${window.innerWidth}px\`);
};

// resize listener
window.addEventListener("resize", setDims);
setDims();`
};
