"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterText = ({
  text = "Building the future, one line at a time...",
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
  loop = true,
  className = "",
  showCursor = true
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    let timeout;
    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        if (loop) {
          setIsDeleting(true);
        }
      }, pauseDuration);
    } else if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length - 1));
        "use client";

        import React, { useState, useEffect } from "react";

        const TypewriterText = ({
          text = "Building the future, one line at a time...",
          speed = 100,
          deleteSpeed = 50,
          pauseDuration = 2000,
          loop = true,
          className = "",
          showCursor = true
        }) => {
          const [displayText, setDisplayText] = useState("");
          const [isDeleting, setIsDeleting] = useState(false);
          const [isPaused, setIsPaused] = useState(false);

          useEffect(() => {
            let timeout;
            if (isPaused) {
              timeout = setTimeout(() => {
                setIsPaused(false);
                if (loop) setIsDeleting(true);
              }, pauseDuration);
            } else if (isDeleting) {
              if (displayText.length > 0) {
                timeout = setTimeout(() => {
                  setDisplayText(text.substring(0, displayText.length - 1));
                }, deleteSpeed);
              } else {
                setIsDeleting(false);
              }
            } else {
              if (displayText.length < text.length) {
                timeout = setTimeout(() => {
                  setDisplayText(text.substring(0, displayText.length + 1));
                }, speed);
              } else if (loop) {
                setIsPaused(true);
              }
            }
            return () => clearTimeout(timeout);
          }, [displayText, isDeleting, isPaused, text, speed, deleteSpeed, pauseDuration, loop]);

          return (
            <span className={`font-mono ${className}`}>
              <span className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">
                {displayText}
                {showCursor && <span className="tw-cursor ml-2">|</span>}
              </span>
            </span>
          );
        };

        export default function TypewriterView(props) {
          return <TypewriterText {...props} />;
        }
