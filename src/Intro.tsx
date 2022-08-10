import {Link} from "./Link";
import {d} from "./utils";

export function IntroSlide() {
  return (
    <section id="intro" {...d("intro/")}>
      <div {...d("intro/title")}>
        <h1>Liqvid</h1>
        <Link href="https://liqvidjs.org" id="logo">
          <img alt="Liqvid logo: stylized play button" src="https://d2og9lpzrymesl.cloudfront.net/r/lv-tutorial/img/logo.png" />
        </Link>
        <time dateTime="2022-08-03">August 3, 2022</time>
        <Link href="https://torontojs-talk.vercel.app">
          View this presentation
        </Link>
        <Link href="https://github.com/ysulyma/torontojs-talk">
          <img alt="GitHub logo" className="github" src="./github-icon.svg" /> Clone this presentation
        </Link>
      </div>

      <div {...d("intro/shock")}>
        <iframe src="https://epiplexis.xyz/a/ewg/lesson/"></iframe>
      </div>
    </section>
  );
}
