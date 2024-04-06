import { createFileRoute } from "@tanstack/react-router";
import RequestForm from "../components/Form/RequestForm";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <RequestForm />;
}
