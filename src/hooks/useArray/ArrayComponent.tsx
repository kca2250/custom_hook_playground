import { Box, Button, Container, Text } from "@chakra-ui/react";
import useArray from "./useArray";
import { CollapseSection } from "../../components/CollapseSection";

export const ArrayComponent = () => {
  const { array, set, push, remove, filter, update, clear } = useArray<number>([
    1, 2, 3, 4, 5, 6,
  ]);
  return (
    <CollapseSection title={"useArray"}>
      <Box
        padding={4}
        backgroundColor={"whitesmoke"}
        borderRadius={"md"}
        mb={3}
      >
        <Text fontSize={"xl"}>{array.join(", ")}</Text>
      </Box>
      <Container display={"flex"} flexDirection={"column"} gap={2}>
        <Button onClick={() => push(7)}>Add 7</Button>
        <Button onClick={() => update(1, 9)}>Change Second Element To 9</Button>
        <Button onClick={() => remove(1)}>Remove Second Element</Button>
        <Button onClick={() => filter((n) => n < 3)}>
          Keep Numbers Less Than 4
        </Button>
        <Button onClick={() => set([1, 2])}>Set To 1, 2</Button>
        <Button onClick={clear}>Clear</Button>
      </Container>
    </CollapseSection>
  );
};
