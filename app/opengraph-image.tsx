import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/constants";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F4C81 0%, #123a63 55%, #2E7D32 100%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "18px 32px",
            borderRadius: 20,
            background: "rgba(255,255,255,0.15)",
            marginBottom: 40,
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: 4,
            color: "#F2D272",
          }}
        >
          NCLM
        </div>
        <div style={{ fontSize: 60, fontWeight: 700, textAlign: "center", lineHeight: 1.15 }}>
          New Covenant Life Ministries
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#F2D272",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Raising Servant Leaders. Restoring Families. Renewing Nations.
        </div>
      </div>
    ),
    { ...size }
  );
}
