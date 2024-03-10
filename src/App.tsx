import { Container, Heading } from "@chakra-ui/react";
import { ArrayComponent } from "./hooks/useArray/ArrayComponent";
import AsyncComponent from "./hooks/useAsync/AsyncComponent";

function App() {
  return (
    <Container w="2xl" pt="7">
      <Heading as="h1" size="lg" pb="5">
        custom hook playground.
      </Heading>

      <ArrayComponent />
      <AsyncComponent />
    </Container>
  );
}

export default App;
