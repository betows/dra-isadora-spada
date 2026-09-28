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
          background: "#e4e4d0",
          padding: "36px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: 40,
            border: "4px solid #1a1a1a",
            background: "#ffffeb",
            color: "#1a1a1a",
            padding: "48px 56px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
            <span>Dra. Isadora Mór Spada</span>
            <span>CRO-SC 18650</span>
          </div>
          <div style={{ display: "flex", fontSize: 72, lineHeight: 1, letterSpacing: -2, maxWidth: 900 }}>
            Harmonização facial em Blumenau
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {["Botox", "LipSense®", "Mentoria Ilumme"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  border: "3px solid #1a1a1a",
                  background: "#f0d7ff",
                  borderRadius: 999,
                  padding: "8px 18px",
                  fontSize: 22,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
