import {Link} from "./Link";
import {d} from "./utils";

export function ScalingSlide() {
  return (
    <section id="scaling" {...d("scaling/")}>
      <div {...d("scaling/title")}>
        <h2>Scaling / Deploying</h2>
        <blockquote className="twitter-tweet" data-dnt="true">
          <p lang="en" dir="ltr">
            Explorable explanations don&#39;t scale and are often primarily for the benefit/enjoyment of people who already understand the concept <Link href="https://t.co/QWO59zNJfa">https://t.co/QWO59zNJfa</Link>
          </p>
          &mdash; Nintendo .DS_Store (@sliminality) <Link href="https://twitter.com/sliminality/status/1495527059011289090">February 20, 2022</Link>
        </blockquote>
        <p>
          <Link href="https://www.math.brown.edu/ysulyma/f21-math180/">MATH 180</Link>: taught multivariable calculus asynchronously with Liqvid, produced 111 videos (18 hours)
        </p>
      </div>

      <div {...d("scaling/static")}>
        <h3>Static assets</h3>
        <p>audio files, thumbnail previews, static video accompaniments</p>
        <p>S3 with CloudFront</p>
        <p>need to configure CORS on CloudFront</p>
        <p>possibly need to configure CSP on server</p>
      </div>

      <div {...d("scaling/hls")}>
        <h3>Adaptive Video</h3>
        <ul>
          <li>use <Link href="https://github.com/dailymotion/hls.js">hls.js</Link></li>
          <li><Link href="https://aws.amazon.com/blogs/networking-and-content-delivery/on-the-fly-video-conversion-amazon-cloudfront-lambdaedge-mediaconvert/">AWS guide: On-the-fly video conversion</Link></li>
          <li>only works with 16:9 aspect ratios</li>
          <li>fix Lambda function</li>
          <li>update Lambda function version in CloudFront distribution</li>
          <li><Link href="https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation">Network Information API</Link> has limited support</li>
        </ul>
      </div>
    </section>
  );
}
