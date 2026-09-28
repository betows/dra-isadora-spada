import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#12100E",
          color: "#F3EEE6",
          fontSize: 54,
          letterSpacing: 4,
          fontWeight: 500,
        }}
      >
        IS
      </div>
    ),
    { ...size },
  );
}
