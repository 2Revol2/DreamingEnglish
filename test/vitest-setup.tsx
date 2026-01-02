import React from "react";
import { vi } from "vitest";
import "../src/app/styles/globals.css";
import "./disable-animations.css";

vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));
