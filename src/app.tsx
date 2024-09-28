import { createSignal } from "solid-js";
import createTransitionSize from "solid-transition-size";
import "./app.css";

export default function App() {
  const [ref, setRef] = createSignal<HTMLElement | null>(null);
  const { transitionSize } = createTransitionSize({
    element: ref,
    dimension: "height",
  });

  const height = () => {
    if (!transitionSize()) return undefined;
    return transitionSize() + "px";
  };

  return (
    <details
      ref={setRef}
      style={{
        transition: "height 1s ease",
        height: height(),
      }}
    >
      <summary>Show detail</summary>
      Detail
    </details>
  );
}
