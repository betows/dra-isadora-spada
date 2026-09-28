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
          background: "#0E0E0C",
          color: "#F7F5F2",
          fontSize: 20,
          letterSpacing: 2,
        }}
      >
        IS
      </div>
    ),
    { ...size },
  );
}
