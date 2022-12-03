import { FormEvent, useContext, useState } from "react";

import { Button, Flex, Input } from "@chakra-ui/react";
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

    await signIn(data);
  }
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <form onSubmit={handleSubmit}>
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
      </form>
    </Flex>
  );
};

export default Home;
