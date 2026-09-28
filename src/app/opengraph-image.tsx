import { ImageResponse } from "next/og";

export const alt =
  "Dra. Isadora Mór Spada — Harmonização facial em Blumenau, CRO-SC 18650";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFF8F3",
          padding: "64px 72px",
          color: "#2A211C",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#E36B4F",
          }}
        >
          <span>CRO-SC 18650</span>
          <span>Blumenau · SC</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28 }}>Dra. Isadora Mór Spada</div>
          <div
            style={{
              marginTop: 16,
              fontSize: 72,
              lineHeight: 1,
              maxWidth: 900,
              fontWeight: 500,
            }}
          >
            Harmonização facial em Blumenau
          </div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 22, color: "#746862" }}>
          <span>Botox</span>
          <span>LipSense®</span>
          <span>Mentoria Ilumme</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
