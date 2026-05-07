import { createFileRoute } from "@tanstack/react-router";
import { DonatePage } from "../components/DonatePage";

export const Route = createFileRoute("/donate")({
  component: DonatePage,
});
