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
          background: "linear-gradient(145deg, #FAF7F2 0%, #F4EFE8 55%, #D8B8A4 100%)",
          padding: "64px 72px",
          color: "#6E2C3A",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
          <span>CRO-SC 18650</span>
          <span>Blumenau · SC</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 34, letterSpacing: 6, textTransform: "uppercase" }}>
            Dra. Isadora Mór Spada
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 72,
              lineHeight: 0.95,
              fontWeight: 600,
              maxWidth: 860,
            }}
          >
            Harmonização facial em Blumenau
          </div>
          <div style={{ marginTop: 22, fontSize: 34, color: "#C45A3A" }}>
            uma doc autêntica pra rostos autênticos
          </div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 22, color: "#6E2C3A" }}>
          <span>LipSense®</span>
          <span>Mentoria Ilumme</span>
          <span>SynFace</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
