import P from "./Text/P";

export const WIP = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "0px",
        left: "0",
        right: "0",
        zIndex: "1001",
        fontSize: "1rem",
        color: "white",
        mixBlendMode: "difference",
      }}
    >
      <P style={{ textAlign: "center" }}>Work in progress</P>
    </div>
  );
};
