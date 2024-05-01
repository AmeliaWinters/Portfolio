import "react";

declare module "react" {
  interface CSSProperties {
    "--animation-order"?: number; // Using `number` here since you are passing a number
  }
}
