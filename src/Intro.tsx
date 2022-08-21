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
        <time dateTime="2022-08-10">August 10, 2022</time>
        <Link href="https://torontojs-talk.vercel.app">
          https://torontojs-talk.vercel.app
        </Link>
        <Link href="https://github.com/ysulyma/torontojs-talk">
          <img alt="GitHub logo" className="github" src="./github-icon.svg" /> Clone this presentation
        </Link>
      </div>

      <div {...d("intro/shock/1")}>
        <iframe src="https://epiplexis.xyz/a/9vg/lesson/" />
      </div>

      <div {...d("intro/shock/2")}>
        <iframe src="https://epiplexis.xyz/a/ewg/lesson/" />
      </div>

      <div {...d("intro/shock/3")}>
        <iframe src="https://www.math.brown.edu/ysulyma/f21-math180/v/16/7/5/" />
      </div>
    </section>
  );
}
