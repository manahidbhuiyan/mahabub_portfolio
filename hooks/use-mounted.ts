"use client";

import { useEffect, useState } from "react";

/** Returns true after the component mounts on the client. */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
