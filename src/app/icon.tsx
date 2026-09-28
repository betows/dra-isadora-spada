import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#6E2C3A",
          color: "#F4EFE8",
          fontSize: 22,
          letterSpacing: 2,
          fontWeight: 600,
        }}
      >
        IS
      </div>
    ),
    { ...size },
  );
}
