"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number; // milliseconds per letter
  cursorTime?: number;
  startDelay?: number;
};

export default function Typewriter({ text, speed = 120, cursorTime = 3000, startDelay = 3000, }: Props) {
  const [count, setCount] = useState(0);
  const [cursorHidden, setCursorHidden] = useState(false);
  const isTyping = count < text.length;
  


  useEffect(
    function typeNextLetter() {
      if (count >= text.length) return;

      function addLetter() {
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        setCount(reduced ? text.length : count + 1);
      }
      let wait = speed;

      if (count === 0) {
        wait = startDelay;
      }

      const id = setTimeout(addLetter, wait);

      function stopTimer() {
        clearTimeout(id);
      }

      return stopTimer;
    },
    [count, text, speed, startDelay]
  );

    useEffect(
    function hideCursorLater() {
      if (isTyping) return;

      function hide() {
        setCursorHidden(true);
      }

      const id = setTimeout(hide, cursorTime);

      function stopTimer() {
        clearTimeout(id);
      }

      return stopTimer;
    },
    [isTyping, cursorTime]
  );

    let cursor = null;

  if (isTyping || !cursorHidden) {
    cursor = <span className="cursor" key={count}/>;
  }
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, count)}
        {cursor}
        <span className="invisible">{text.slice(count)}</span>
      </span>
    </>
  );
}