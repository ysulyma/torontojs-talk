import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {Link} from "./Link";
import {d, f} from "./utils";
import {samples} from "./samples";

const highlightLines = (...lines: number[]) => (n: number) => {
  if (lines.includes(n)) {
    return {class: "highlight"};
  }
  return {};
}

export function MobileSlide() {
  return (
    <section id="mobile" {...d("mobile/")}>
      <div {...d("mobile/title")}>
        <h2>Making it work on mobile <span id="sucks" {...f("mobile/title/sucks")}>or: iOS Safari sucks ass</span></h2>
        <p id="safari">
          <img alt="Safari logo" id="safari" src="./safari-icon.svg" />
          👎
        </p>
      </div>

      {/* terser */}
      <div {...d("mobile/terser")}>
        <h3>Safari 10 has some parsing issues</h3>
        <p {...f("mobile/terser/soln")}>Solution:</p>
        <SyntaxHighlighter
          {...f("mobile/terser/soln")} language="javascript"
          showLineNumbers wrapLines lineProps={highlightLines(5, 11)}
        >{samples.safari10}</SyntaxHighlighter>
      </div>

      {/* viewport units */}
      <div {...d("mobile/viewport")}>
        <h3>Viewport units (<code>vh</code>, <code>vw</code>) <Link href="https://bugs.webkit.org/show_bug.cgi?id=141832#c5">don't work on iOS</Link></h3>

        <p {...f("mobile/viewport/soln")}>Solution: use Javascript to sync a CSS variable with the correct dimensions:</p>
        <SyntaxHighlighter {...f("mobile/viewport/soln")} language="javascript">{samples.viewport}</SyntaxHighlighter>
      </div>

      {/* fake-fullscreen */}
      <div {...d("mobile/fullscreen")}>
        <h3>iOS doesn't support fullscreen</h3>
        <p {...f("mobile/fullscreen/soln")}>Solution: <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage"><code>postMessage()</code></Link> to parent frame, which will use CSS
          to blow up the <code>&lt;iframe&gt;</code> to full screen</p>
        <SyntaxHighlighter {...f("mobile/fullscreen/soln")} language="css">{samples.fakeFullscreen}</SyntaxHighlighter>
      </div>

      {/* media */}
      <div {...d("mobile/webm")}>
        <h3>iOS doesn't support <code>.webm</code> audio/video</h3>
        <p {...f("mobile/webm/soln")}>
          provide media in both <code>.webm</code> and <code>.mp4</code> format
        </p>
        <SyntaxHighlighter {...f("mobile/webm/soln")} language="tsx">{samples.audioFormats}</SyntaxHighlighter>
        <p {...f("mobile/webm/cli")}>CLI command: <Link href="https://liqvidjs.org/docs/cli/audio/#convert"><code className="cli">liqvid audio convert</code></Link></p>
        <p {...f("mobile/webm/browser")}>audio/video recorded in the browser doesn't have the metadata needed for seeking, so needs to be run through <code>ffmpeg</code> anyway (<code>.webm</code> → <code>.webm</code>)</p>
      </div>

      {/* onClick */}
      <div {...d("mobile/onClick")}>
        <h3>Touch events don't trigger <code>onClick</code> handlers</h3>
        <p {...f("mobile/onClick/soln")}>Solution: provide an <code>onClick</code> wrapper</p>
        <SyntaxHighlighter {...f("mobile/onClick/soln")} language="tsx">{samples.onClick}</SyntaxHighlighter>
      </div>

      {/* WAP */}
      <div {...d("mobile/wap")}>
        <h3><Link href="https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide">Web Autoplay Policy</Link></h3>
        <p {...f("mobile/wap/what")}>audio cannot be played without user interaction (clicking, keyboard, etc.)</p>
        <p {...f("mobile/wap/soln")}>Solution:</p>
        <ul>
          <li>join all audio files into one</li>
          <li>extract audio from static video files</li>
        </ul>
        <p {...f("mobile/wap/cli")}>CLI command: <Link href="https://liqvidjs.org/docs/cli/audio/#join"><code className="cli">liqvid audio join</code></Link></p>
      </div>

      {/* Web Animations */}
      <div {...d("mobile/anim")}>
        <h3>Web Animations API is not supported in older iOS</h3>
        <ul>
          <li>there's an official polyfill</li>
          <li>…but it's out of date and no longer maintained</li>
          <li>…and it breaks native WAAPI support in modern browsers</li>
        </ul>
        <p>Solution: selectively load polyfill, then monkey-patch it</p>
      </div>
    </section>
  );
}