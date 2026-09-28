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
          background: "#0E0E0C",
          color: "#F7F5F2",
          fontSize: 54,
          letterSpacing: 4,
        }}
      >
        IS
      </div>
    ),
    { ...size },
  );
}
