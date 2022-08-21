import {Script} from "liqvid";

export const markers = [
  ["intro/title", "1:00"],
  ["intro/shock/1", "1:00"],
  ["intro/shock/2", "1:00"],
  ["intro/shock/3", "1:00"],
  // ["design/", "1:00"],
  ["design/playback", "1:00"],
  ["design/replay", "1:00"],
  ["design/arch", "1:00"],
  ["mobile/title", "1:00"],
  ["mobile/title/sucks", "1:00"],
  ["mobile/terser", "1:00"],
  ["mobile/terser/soln", "1:00"],
  ["mobile/viewport", "1:00"],
  ["mobile/viewport/soln", "1:00"],
  ["mobile/fullscreen", "1:00"],
  ["mobile/fullscreen/soln", "1:00"],
  ["mobile/onClick", "1:00"],
  ["mobile/onClick/soln", "1:00"],
  ["mobile/webm", "1:00"],
  ["mobile/webm/soln", "1:00"],
  ["mobile/webm/cli", "1:00"],
  ["mobile/webm/browser", "1:00"],
  ["mobile/wap", "1:00"],
  ["mobile/wap/what", "1:00"],
  ["mobile/wap/soln", "1:00"],
  ["mobile/wap/cli", "1:00"],
  ["scaling/title", "1:00"],
  ["scaling/static", "1:00"],
  ["scaling/hls", "1:00"],
  ["interop/esm", "1:00"],
  ["interop/dist", "1:00"],
  ["interop/package", "1:00"],
  ["interop/pipeline", "1:00"],
  ["interop/web", "1:00"],
] as [string, string][];

export const script = new Script(markers);
export const playback = script.playback;

// playback.seek(script.parseStart("intro/shock/2"));
