import {onClick} from "@liqvid/utils/react";
import {useScript} from "liqvid";
import {useMemo} from "react";
import {playback, script} from "./markers";

const items = [
  // {
  //   text: "Shock and Awe",
  //   marker: 
  // },
  // {
  //   text: "Design"
  // },
  {
    text: "Intro",
    marker: "intro/"
  },
  {
    text: "Design",
    marker: "design/playback"
  },
  {
    text: "Mobile",
    marker: "mobile/title"
  },
  {
    text: "Scaling",
    marker: "scaling/title"
  },
  {
    text: "Interop",
    marker: "interop/esm"
  }
].map(item => ({...item, time: script.parseStart(item.marker)}));

/** Navigation. */
export function Nav() {
  const script = useScript();
  const navigate = useMemo(() => onClick<HTMLAnchorElement>(e => {
    e.preventDefault();

    const t = parseFloat(new URL(e.currentTarget.href).searchParams.get("t"));
    playback.seek(t);

    // keyboard shortcuts won't get handled if link is focused
    e.currentTarget.blur();
    return false;
  }), []);

  return (
    <nav>
      <ul>
        {items.map(item => (
          <li key={item.text}>
            <a href={`?t=${item.time}`} {...navigate}>{item.text}</a>
          </li>
        ))}
      </ul>

      <Prev />
      <Forward />
    </nav>
  );
}

/** Button to go back one transition. */
function Prev() {
  const label = "Go back one transition";

  const events = useMemo(() => onClick<HTMLButtonElement>(e => {
    script.back();
    // keyboard shortcuts won't get handled if button is focused
    e.currentTarget.blur();
  }), []);

  return (
    <button {...events} aria-label={label} title={label}>&lt;</button>
  );
}

/** Button to go forward one transition. */
function Forward() {
  const label = "Go forward one transition";

  const events = useMemo(() => onClick<HTMLButtonElement>(e => {
    script.forward();
    // keyboard shortcuts won't get handled if button is focused
    e.currentTarget.blur();
  }), []);

  return (
    <button {...events} aria-label={label} title={label}>&gt;</button>
  );
}