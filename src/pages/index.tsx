import { FormEvent, useContext, useState } from "react";

import { Button, Flex, Input, Text } from "@chakra-ui/react";
import type { NextPage } from "next";

import { AuthContext } from "../contexts/AuthContext";

const Home: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password,
    };

    console.log(data);
  }
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Flex gap="2" direction="column" as="form" onSubmit={() => handleSubmit}>
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
      </Flex>
    </Flex>
  );
};

export default Home;
