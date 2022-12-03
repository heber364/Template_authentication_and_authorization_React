import { useContext, useEffect } from "react";

import { Heading } from "@chakra-ui/react";

import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("/me")
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  });
  return <Heading>{`Dashboard: ${user?.email}`}</Heading>;
}
