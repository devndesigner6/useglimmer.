"use client";

import { Undo03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";

const sizeConfig = {
  sm: {
    paddingX: "px-3",
    paddingY: "py-2",
    fontSize: "text-xs",
    iconSize: "h-3 w-3",
    iconContainerPadding: "p-1",
    gap: "gap-1.5",
    counterPaddingX: "px-2.5",
    counterPaddingY: "py-1.5",
    counterMinWidth: "min-w-[24px]",
  },
  md: {
    paddingX: "px-5",
    paddingY: "py-3",
    fontSize: "text-base",
    iconSize: "h-4 w-4",
    iconContainerPadding: "p-1.5",
    gap: "gap-2",
    counterPaddingX: "px-4",
    counterPaddingY: "py-3",
    counterMinWidth: "min-w-[32px]",
  },
  lg: {
    paddingX: "px-7",
    paddingY: "py-4",
    fontSize: "text-lg",
    iconSize: "h-5 w-5",
    iconContainerPadding: "p-2",
    gap: "gap-3",
    counterPaddingX: "px-5",
    counterPaddingY: "py-4",
    counterMinWidth: "min-w-[40px]",
  },
  xl: {
    paddingX: "px-9",
    paddingY: "py-5",
    fontSize: "text-xl",
    iconSize: "h-6 w-6",
    iconContainerPadding: "p-2.5",
    gap: "gap-4",
    counterPaddingX: "px-6",
    counterPaddingY: "py-5",
    counterMinWidth: "min-w-[48px]",
  },
};

const DeleteButton = ({ size = "md" }: { size?: keyof typeof sizeConfig }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [count, setCount] = useState(10);
  const [isAnimating, setIsAnimating] = useState(false);

  const config = sizeConfig[size];

  // Counter Logic (10 → 0)
  useEffect(() => {
    if (!isDeleting) return;

    if (count === 0) return;

    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [isDeleting, count]);

  // Handle animation lock
  const handleClick = (newState: boolean) => {
    if (isAnimating) return; // Prevent clicks during animation
    setIsAnimating(true);
    setIsDeleting(newState);
    if (newState) setCount(10);

    // Release lock after animation completes
    setTimeout(() => setIsAnimating(false), 400);
  };

  // Split text into characters for animation
  const deleteText = "Delete Account";
  const cancelText = "Cancel Deletion";

  return (
    <div className="flex items-center justify-center">
      <AnimatePresence mode="popLayout" initial={false}>
        {!isDeleting ? (
          // ⛔ STATE A — DELETE BUTTON
          <motion.button
            key="delete"
            layoutId="deleteButton"
            onClick={() => handleClick(true)}
            whileTap={{ scale: 0.95 }}
            style={{ pointerEvents: isAnimating ? "none" : "auto" }}
            initial={{
              backgroundColor: "#FFEDF1",
              filter: "blur(1px)",
              opacity: 1,
            }}
            animate={{
              backgroundColor: "#FE322A",
              filter: "blur(0px)",
              opacity: 1,
            }}
            exit={{
              backgroundColor: "#FFEDF1",
              filter: "blur(1px)",
              opacity: 0,
            }}
            className={`text-white ${config.paddingX} ${config.paddingY} ${config.fontSize} rounded-full flex items-center justify-center overflow-hidden`}
            transition={{
              layout: { duration: 0.4, ease: [0.77, 0, 0.175, 1] },
              backgroundColor: { duration: 0.4, ease: "easeInOut" },
              filter: { duration: 0.1, ease: "easeInOut" },
              opacity: { duration: 0.2, ease: "easeOut" },
            }}
          >
            <motion.span
              layoutId="buttonText"
              className="flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {deleteText.split("").map((char, i) => (
                <motion.span
                  key={`delete-${i}`}
                  initial={{ y: 20, opacity: 0, scale: 0.3 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -20, opacity: 0, scale: 0.3 }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.005,
                    ease: [0.785, 0.135, 0.15, 0.86],
                  }}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.button>
        ) : (
          // ✅ STATE B — CANCEL DELETION EXPANDED
          <motion.button
            key="cancel"
            layoutId="deleteButton"
            onClick={() => handleClick(false)}
            whileTap={{ scale: 0.95 }}
            style={{ pointerEvents: isAnimating ? "none" : "auto" }}
            initial={{
              backgroundColor: "#FE322A",
              filter: "blur(1px)",
              opacity: 0,
            }}
            animate={{
              backgroundColor: "#FFEDF1",
              filter: "blur(0px)",
              opacity: 1,
            }}
            exit={{
              backgroundColor: "#FE322A",
              filter: "blur(1px)",
              opacity: 0,
            }}
            className={`${config.paddingX} ${config.paddingY} ${config.gap} rounded-full flex items-center overflow-hidden`}
            transition={{
              layout: { duration: 0.4, ease: [0.77, 0, 0.175, 1] },
              backgroundColor: { duration: 0.4, ease: "easeInOut" },
              filter: { duration: 0.2, ease: "easeInOut" },
              opacity: { duration: 0.2, ease: "easeIn" },
            }}
          >
            {/* ICON */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className={`bg-[#FE322A] ${config.iconContainerPadding} rounded-full flex items-center justify-center shrink-0`}
            >
              <HugeiconsIcon
                icon={Undo03Icon}
                className={`${config.iconSize} text-white`}
              />
            </motion.div>

            {/* TEXT */}
            <motion.span
              layoutId="buttonText"
              className={`text-[#FE322A] font-medium flex ${config.fontSize}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              {cancelText.split("").map((char, i) => (
                <motion.span
                  key={`cancel-${i}`}
                  initial={{ y: 20, opacity: 0, scale: 0.3 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -20, opacity: 0, scale: 0.3 }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.006,
                    ease: [0.785, 0.135, 0.15, 0.86],
                  }}
                  style={{ display: "inline-block", whiteSpace: "pre" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>

            {/* COUNTER WITH ANIMATION (10 → 0) */}
            <motion.div
              className={`bg-[#FE322A] text-white ${config.counterPaddingX} ${config.counterPaddingY} ${config.fontSize} rounded-full font-semibold flex items-center justify-center relative overflow-hidden shrink-0 ${config.counterMinWidth}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={count}
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.8,
                  }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    scale: 0.8,
                  }}
                  transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}
                  className="absolute"
                >
                  {count}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DeleteButton;
