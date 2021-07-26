import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenu3Line } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/sidebarDrawerContext";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { Search } from "./Search";

export function Header(){

  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return(
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center">

        { !isWideVersion && (
          <IconButton 
            icon={<Icon as={RiMenu3Line}/>}
            aria-label="Open navigation"
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mr="2"
          />
        ) }
        
        <Logo />

        {isWideVersion && <Search />}        

        <Flex align="center" ml="auto"> 
          <NotificationsNav /> 
          <Profile showProfileData={isWideVersion}/>
        </Flex>
    </Flex>
  )
}