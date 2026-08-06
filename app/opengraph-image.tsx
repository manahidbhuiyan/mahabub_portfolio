import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mahabub Alam — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(145deg, #141820 0%, #1c2430 45%, #243028 100%)",
          color: "#f4f5f2",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#a3b18a",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
            Mahabub Alam
          </div>
          <div style={{ fontSize: 34, color: "#c8cdc4", maxWidth: 820 }}>
            Full Stack Software Engineer — React, Next.js, Node.js
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#8f968c" }}>
          Building fast, thoughtful digital products
        </div>
      </div>
    ),
    { ...size },
  );
}
