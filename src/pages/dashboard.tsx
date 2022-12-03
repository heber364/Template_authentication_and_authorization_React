import { useContext, useEffect } from "react";

import { Heading } from "@chakra-ui/react";

import { AuthContext } from "../contexts/AuthContext";
import { setupAPICliente } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

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

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPICliente(ctx);
  const response = await apiClient.get("/me");

  console.log(response.data);
  return {
    props: {},
  };
});
