import { createFileRoute } from "@tanstack/react-router";
import Login from "../../components/Login/Login";
import PickMenu from "../../components/PickMenu/PickMenu";

export const Route = createFileRoute("/admin/")({
  component: Admin,
});

const token = localStorage.getItem("token");
function Admin() {
  return token ? <PickMenu /> : <Login />;
}
