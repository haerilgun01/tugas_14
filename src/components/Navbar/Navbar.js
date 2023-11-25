import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
  } from '@chakra-ui/react'
  import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
  import DataNavbar from '../../utils/constants/DataNavbar'
  import { color } from 'framer-motion'
  
  const NavLink = (props) => {
    const { children, to } = props
  
    return (
      <Box
        as="a"
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={to}>
        {children}
      </Box>
    )
  }
  
  export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { colorMode, toggleColorMode } = useColorMode()

    const links = DataNavbar
  
    return (
      <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box>
                <Text fontWeight={"bold"} fontSize={"20px"}>HaErIL</Text>
              </Box>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {links.map((link) => (
                  <NavLink key={link.id} to={link.url}>{link.title}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {links.map((link) => (
                  <NavLink key={link.id} to={link.url}>{link.title}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    )
  }
  