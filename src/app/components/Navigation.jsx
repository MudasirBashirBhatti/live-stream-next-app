"use client";
import Link from "next/link";
import styles from "./CSS/Navigation.module.css";
import { useState } from "react";
export const Navigation = () => {
  const [activeIndex, setactiveIndex] = useState(0);
  let navElem = [
    {
      href: "/",
      title: "Movies",
    },
    {
      href: "/tv-series",
      title: "TV SERIES",
    },
    {
      href: "/channels",
      title: "CHANNELS",
    },
    {
      href: "/our-apps",
      title: "Apps",
    },
    {
      href: "more-settings",
      title: "Settings",
    },
  ];
  let detect = (index) => {
    setactiveIndex(index);
  };
  return (
    <nav className={styles.navigation}>
      <ul className={styles.ul}>
        {navElem.map((e, index) => (
          <Link
            href={`${e.href}`}
            className={styles.li}
            onClick={() => detect(index)}
            style={{
              color: `${
                activeIndex === index ? "white" : "rgba(255, 255, 255, 0.719)"
              }`,
              fontWeight: `${activeIndex === index ? "700" : ""}`,
            }}
          >
            {e.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
