import {usePlayer} from "liqvid";
import {useEffect} from "react";

/** Disable pause-on-click. */
export function DisablePause() {
  // since this calls usePlayer(), cannot put directly in <MyVideo>
  const player = usePlayer();
  useEffect(() => {
    player.hub.on("canvasClick", () => false);
  }, []);
  return null;
}
