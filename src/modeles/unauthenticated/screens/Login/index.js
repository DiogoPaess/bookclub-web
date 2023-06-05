import { Flex, Img, Text, Input, Link, Button } from '@chakra-ui/react'

export const LoginScreen = () => {
  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        justifyContent="center"
        alignItems="flex-start"
        paddingLeft="112px"
        flexDir="column"
        w="40%"
        h="100%"
      >
        <Flex flexDir="column" w="416px">
          <Img src="/img/logo.svg.svg" alt="BookClub Logo" w="160px" h="48px" />
          <Text mt="48px">Login</Text>
          <Input mt="24px" placeholder="email@exemplo.com" />
          <Input mt="16px" placeholder="**************" />
          <Link mt="8px">Esqueceu sua senha?</Link>
          <Button mt="24px">Login</Button>
          <Link mt="38px">Não possui conta Cadastre-se aqui.</Link>
        </Flex>
      </Flex>
      <Flex
        w="60%"
        h="100%"
        backgroundImage="url('/img/Auth_background.svg.svg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderTopLeftRadius="32px"
        borderBottomLeftRadius="32px"
      />
    </Flex>
  )
}
