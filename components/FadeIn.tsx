import React, {
  JSXElementConstructor,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
const { v4: uuidv4 } = require("uuid");

import { useRef } from "react";

interface Props {
  delay?: number;
  transitionDuration?: number;
  wrapperTag?: JSXElementConstructor<any>;
  childTag?: JSXElementConstructor<any>;
  className?: string;
  childClassName?: string;
  visible?: boolean;
  onComplete?: () => any;
  display?: string;
}

export default function FadeIn(props: PropsWithChildren<Props>) {
  const [maxIsVisible, setMaxIsVisible] = useState(0);
  const transitionDuration = props.transitionDuration || 400;
  const delay = props.delay || 50;
  const WrapperTag = props.wrapperTag || "div";
  const ChildTag = props.childTag || "div";
  const [visibility, setVisibility] = useState(false);
  let visible =
    typeof props.visible === "undefined" ? visibility : props.visible;

  const visibilize = setVisibility;
  useEffect(() => {
    let count = React.Children.count(props.children);
    if (!visible) {
      // Animate all children out
      count = 0;
    }

    if (count == maxIsVisible) {
      // We're done updating maxVisible, notify when animation is done
      const timeout = setTimeout(() => {
        if (props.onComplete) props.onComplete();
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }

    // Move maxIsVisible toward count
    const increment = count > maxIsVisible ? 1 : -1;
    const timeout = setTimeout(() => {
      setMaxIsVisible(maxIsVisible + increment);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay, maxIsVisible, visible, transitionDuration, props]);

  const refId = useRef(uuidv4());

  useEffect(() => {
    const faders = document.getElementsByClassName(props.className as string);
    if (faders) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }
            visibilize(true);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(refId.current);
    }
  }, [props.className, visibilize]);

  return (
    <WrapperTag
      className={props.className}
      ref={refId}
      style={{ display: `${props.display}` }}
    >
      {React.Children.map(props.children, (child, i) => {
        return (
          <ChildTag
            className={props.childClassName}
            style={{
              transition: `opacity ${transitionDuration}ms, transform ${transitionDuration}ms`,
              transform: maxIsVisible > i ? "none" : "translateY(20px)",
              opacity: maxIsVisible > i ? 1 : 0,
              display: `${props.display}`,
            }}
          >
            {child}
          </ChildTag>
        );
      })}
    </WrapperTag>
  );
}
