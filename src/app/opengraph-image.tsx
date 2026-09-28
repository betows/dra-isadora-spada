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
          background:
            "repeating-linear-gradient(90deg, #7A2D3A 0px, #7A2D3A 46px, #E8CFC9 46px, #E8CFC9 92px)",
          padding: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: 28,
            background: "#F6EDD6",
            color: "#5E2030",
            padding: "48px 56px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
            <span>@draisadoraspada</span>
            <span>CRO-SC 18650</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28 }}>Dra. Isadora Mór Spada</div>
            <div
              style={{
                marginTop: 12,
                fontSize: 68,
                lineHeight: 1,
                maxWidth: 860,
              }}
            >
              Harmonização facial em Blumenau
            </div>
          </div>
          <div style={{ display: "flex", gap: 28, fontSize: 24 }}>
            <span>Botox</span>
            <span>LipSense®</span>
            <span>Mentoria Ilumme</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
