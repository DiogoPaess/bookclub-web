import { Flex, Img } from '@chakra-ui/react'
import { Text, Input, Link, Button } from 'components'
import { useNavigate } from 'react-router-dom'

export const RegisterScreen = () => {
  const navigate = useNavigate()
  return (
    <Flex flexDir="row" w="100vw" h="100vh">
      <Flex
        justifyContent="center"
        alignItems={['center', 'flex-start']}
        padding={['24px', '0px', '80px', '112px']}
        flexDir="column"
        w={['100%', '100%', '100%', '40%']}
        h="100%"
      >
        <Flex flexDir="column" w={['100%', '100%', '100%', '416px']}>
          <Img src="/img/logo.svg.svg" alt="BookClub Logo" w="160px" h="48px" />
          <Text.ScreenTitle mt="48px">Cadastro</Text.ScreenTitle>
          <Input mt="24px" placeholder="Nome completo" />
          <Input mt="16px" placeholder="E-mail" />
          <Input.Password mt="16px" placeholder="Senha" />
          <Input.Password mt="16px" placeholder="Confirma Senha" />

          <Button mt="24px">Cadastrar</Button>
          <Link.Action
            onClick={() => navigate('/')}
            mt="38px"
            text="Já possui uma conta?"
            actionText="Faça login aqui"
          />
        </Flex>
      </Flex>
      <Flex
        w={['0', '0px', '0px', '60%']}
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
