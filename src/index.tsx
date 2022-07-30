import {Player} from "liqvid";
import {createRoot} from "react-dom/client";

// resources
import {script} from "./markers";

// components
import {DisablePause} from "./DisablePause";
import {Nav} from "./Nav";
import {RebindKeys} from "./RebindKeys";

// slides
import {DesignSlide} from "./Design";
import {Interop} from "./Interop";
import {IntroSlide} from "./Intro";
import {MobileSlide} from "./Mobile";
import {ScalingSlide} from "./Scaling";

function Lesson() {
  return (
    <Player controls={<></>} script={script}>
      <RebindKeys/>
      <DisablePause />
      <Nav />
      <IntroSlide />
      <DesignSlide/>
      <MobileSlide />
      <ScalingSlide />
      <Interop/>
    </Player>
  );
}

createRoot(document.querySelector("main")).render(<Lesson />);
