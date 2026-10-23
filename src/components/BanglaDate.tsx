"use client";

import { useSyncExternalStore } from "react";
import { getBanglaDate } from "@/lib/formate";

const subscribe = () => () => {};

export default function BanglaDate() {
  const date = useSyncExternalStore(
    subscribe,
    () => getBanglaDate(),
    () => ""               
  );

  return <>{date}</>;
}