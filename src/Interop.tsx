import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {Link} from "./Link";
import {samples} from "./samples";
import {d} from "./utils";

export function Interop {
  return (
    <section id="interop" {...d("interop/")}>
      <div {...d("interop/esm")}>
        <h3>Hybrid modules</h3>
        <p>ESM is the future</p>
        <ul>
          <li>tree-shaking</li>
        </ul>
        <p>but we live in the present (CJS)</p>
        <ul>
          <li>lots of tooling (e.g. Jest) has issues with ESM</li>
          <li>TypeScript <Link href="https://github.com/microsoft/TypeScript/issues/16577#issuecomment-703190339">does not and will not add file extensions</Link>, which are required by ESM</li>
        </ul>
      </div>

      <div {...d("interop/dist")}>
        <p>Directory structure:</p>
        <SyntaxHighlighter>{samples.dist}</SyntaxHighlighter>
      </div>

      <div {...d("interop/package")}>
        <p><code>package.json</code>:</p>
        <SyntaxHighlighter language="json">{samples.packageJson}</SyntaxHighlighter>
      </div>

      <div {...d("interop/pipeline")}>
      <p>Build script:</p>
        <SyntaxHighlighter language="bash">{samples.buildCommand}</SyntaxHighlighter>
        <SyntaxHighlighter language="javascript">{samples.buildMjs}</SyntaxHighlighter>
      </div>

      <div {...d("interop/web")}>
        <p>Liqvid 3.0: work with Svelte/Vue/Web Components</p>
        <p>plugin suite compatible with GSAP and Remotion</p>
        <p><Link href="https://github.com/ysulyma/proposal-mediaelement">WHATWG proposal</Link></p>
      </div>
    </section>
  )
}