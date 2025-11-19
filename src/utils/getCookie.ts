"use client";

export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split(";"); // split all cookies
  for (let cookie of cookies) {
    const [key, ...rest] = cookie.split("="); // split key=value
    if (key.trim() === name) {
      return decodeURIComponent(rest.join("="));
    }
  }

  return null;
}
