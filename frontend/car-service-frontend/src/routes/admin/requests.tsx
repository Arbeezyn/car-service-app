import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import ItemInterface from "../../../interface/Item.interface";
import List from "../../components/List/List";
import Login from "../../components/Login/Login";

export const Route = createFileRoute("/admin/requests")({
  component: Requests,
});

const token = localStorage.getItem("token");
function Requests() {
  const [reqData, setReqData] = useState<ItemInterface[]>([]);

  useEffect(() => {
    axios.get("http://localhost:4444/request").then((response) => {
      setReqData(response.data);
      console.log(response.data);
    });
  }, []);

  return token ? <List data={reqData} /> : <Login />;
}
