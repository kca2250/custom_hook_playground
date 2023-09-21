import { Box, Heading, Text } from "@chakra-ui/react";

type Props = {
  title: string;
};

export const CustomHeading = ({ title }: Props) => {
  return (
    <Heading as={"h1"} fontSize={"xl"} mb={"2"}>
      <Box as="span" fontWeight={"bold"} opacity={0.6}>
        #
      </Box>
      <Text>{title}</Text>
    </Heading>
  );
};
