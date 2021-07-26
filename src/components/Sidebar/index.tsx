import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/sidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";


export default function Sidebar(){

  const { isOpen, onClose } = useSidebarDrawer();

  const isFloatingSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isFloatingSidebar){
    return(
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6"/>
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <Sidebar/>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return(
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  )
}