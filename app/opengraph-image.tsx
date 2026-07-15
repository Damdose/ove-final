import { ImageResponse } from "next/og";

export const alt = "Ovedex — Digital, IT & Solutions techniques";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const INK = "#0d0b4a";
const POLE_ACCENTS = ["#34d399", "#c084fc", "#60a5fa"];

export default function Image() {
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
          backgroundColor: INK,
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", gap: 24, marginBottom: 48 }}>
          {POLE_ACCENTS.map((color) => (
            <div
              key={color}
              style={{
                width: 28,
                height: 28,
                borderRadius: 9999,
                backgroundColor: color,
              }}
            />
          ))}
        </div>
        <div
          style={{
            fontSize: 132,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          Ovedex
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 40,
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.82)",
          }}
        >
          Digital · IT · Solutions techniques
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
