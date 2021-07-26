import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
  showProfileData: boolean
}

export function Profile({showProfileData = true}: ProfileProps){
  return(
    <Flex alignItems="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gilberto Neto</Text>
          <Text color="gray.300" fontSize="small">
            Gilberto.beltrameneto@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Gilberto Neto" src="https://github.com/Gilbeltrame.png" />
    </Flex>    
  );
}