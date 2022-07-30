import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {Link} from "./Link";
import {samples} from './samples';
import {d, f} from "./utils";

export function DesignSlide() {
  const packages = [
    {name: "liqvid", desc: "Player GUI"}
  ];

  return (
    <section id="design" {...d("design/")}>
      <div {...d("design/playback")}>
        <h3>The <Link href="https://liqvidjs.org/docs/reference/Playback/"><code>Playback</code></Link> class</h3>
        <p><code>Playback</code> = animation loop + event emitter</p>
        <p>imitate <Link href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement"><code>HTMLMediaElement</code></Link></p>
      </div>

      <div {...d("design/replay")}>
        <h3>Replay Data</h3>
        <SyntaxHighlighter {...f("design/replay")} language="typescript">{samples.replayData}</SyntaxHighlighter>
      </div>

      <div {...d("design/arch")}>
        <h3>Architecture</h3>
        {/* Internals: liqvid, @liqvid/{keymap,playback,utils}

        Convenience: @liqvid/{host,polyfills}

        CLI: @liqvid/{captioning,cli,renderer}

        Integrations: <code>{`@liqvid/{katex,mathjax,react-three,xyjax}`}</code>

        Plugins: @liqvid/recording @lqv/{cursor,codemirror,codebooth,paint} */}
      </div>
    </section>
  );
}
