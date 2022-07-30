import {useKeymap, useScript} from "liqvid";
import {useEffect} from "react";

export function RebindKeys() {
  const keymap = useKeymap();
  const script = useScript();

  useEffect(() => {
    // unbind all keyboard shortcuts
    for (const seq of keymap.getKeys()) {
      if (seq === "*") {
        continue;
      }
      for (const handler of keymap.getHandlers(seq)) {
        if (!["E", "W"].includes(seq)) {
          keymap.unbind(seq, handler);
        }
      }
    }

    // bind arrow keys
    keymap.bind("ArrowLeft", script.back);
    keymap.bind("ArrowRight", script.forward);
  }, []);
  return null;
}