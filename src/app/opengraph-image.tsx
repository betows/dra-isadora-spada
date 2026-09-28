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
          background: "#F3EEE6",
          padding: "64px 72px",
          color: "#12100E",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6F6860",
          }}
        >
          <span>CRO-SC 18650</span>
          <span>Blumenau · SC</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: 72,
              height: 1,
              background: "#B07A52",
              marginBottom: 28,
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#6F6860",
            }}
          >
            Dra. Isadora Mór Spada
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 76,
              lineHeight: 0.9,
              maxWidth: 920,
            }}
          >
            Harmonização facial em Blumenau
          </div>
          <div
            style={{
              marginTop: 22,
              fontSize: 28,
              fontStyle: "italic",
              color: "#1A1714",
            }}
          >
            uma doc autêntica pra rostos autênticos
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
            fontSize: 18,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#B07A52",
          }}
        >
          <span>LipSense®</span>
          <span>Mentoria Ilumme</span>
          <span>SynFace</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
