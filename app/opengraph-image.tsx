import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "62px 68px",
        background: "#f5f0e8",
        color: "#141414",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 25, fontWeight: 700 }}>
        <span>EL ESTUDIO TATTOO</span>
        <span>BARCELONA</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 91, lineHeight: 0.9, fontWeight: 900, letterSpacing: "-4px" }}>
        <span>TRAE LA IDEA.</span>
        <span style={{ color: "#ff4fa3" }}>NOSOTRAS TRAZAMOS.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
        <span>Fine line · minimal · custom</span>
        <span>Passatge de Valeri Serra, 10</span>
      </div>
    </div>,
    size,
  );
}
