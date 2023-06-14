import { Flex, Img } from '@chakra-ui/react'
import { SearchBar, UserMenu } from 'components/molecules'

export const NavBar = () => {
  return (
    <Flex
      w="100vw"
      flexDir="row"
      alignItems="center"
      justifyContent="space-between"
      paddingX={['24px', '0px', '80px', '112px']}
      padding={['24px']}
    >
      <Img src="/img/logo.svg.svg" alt="BookClub Logo" w="160px" h="48px" />
      <SearchBar />
      <UserMenu />
    </Flex>
  )
}
