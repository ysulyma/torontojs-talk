import {Link} from "./Link";
import {d} from "./utils";

export function IntroSlide() {
  return (
    <section id="intro">
      <div {...d("intro/")}>
        <h1>Liqvid</h1>
        <Link href="https://liqvidjs.org" id="logo">
          <img alt="Liqvid logo: stylized play button" src="https://d2og9lpzrymesl.cloudfront.net/r/lv-tutorial/img/logo.png" />
        </Link>
        <time dateTime="2022-08-03">August 3, 2022</time>
        <Link data-affords="click" href="https://github.com/ysulyma/???">
          <img alt="GitHub logo" className="github" src="./github-icon.svg" /> Clone this presentation
        </Link>
      </div>
    </section>
  );
}
