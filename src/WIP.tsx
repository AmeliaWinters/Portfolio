import P from "./Text/P";

export const WIP = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0px",
        left: "0",
        right: "0",
        zIndex: "4",
        fontSize: "1.5rem",
        color: "white",
        mixBlendMode: "difference",
      }}
    >
      <P style={{ textAlign: "center" }}>Work in progress</P>
    </div>
  );
};
