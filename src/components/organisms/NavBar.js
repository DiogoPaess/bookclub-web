import { useState } from 'react'
import { Flex, Img } from '@chakra-ui/react'
import { SearchBar, UserMenu } from 'components/molecules'
import { useNavigate } from 'react-router-dom'
import { UserModal } from './UserModal'
import { PasswordModal } from './PasswordModal'
import { TermsdModal } from './TermsModal'
import { PrivacyPolicyModal } from './PrivacyPolicyModal'
import { useDispatch } from 'react-redux'
import { setAll } from 'services/store/slices/user'

export const NavBar = ({ query, setQuery }) => {
  const [showModal, setShowModal] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onCloseModal = () => {
    setShowModal(null)
  }

  const onLogout = () => {
    localStorage.clear()
    dispatch(
      setAll({
        user: null,
        token: null
      })
    )
    navigate('/')
  }

  return (
    <>
      <Flex
        w="100vw"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        paddingX={['24px', '0px', '80px', '112px']}
        padding={['24px']}
      >
        <Img
          src="/img/logo.svg.svg"
          alt="BookClub Logo"
          w={['100px', '160px']}
          h="48px"
          cursor="pointer"
          onClick={() => navigate('/home')}
        />
        <Flex display={['none', 'flex']}>
          <SearchBar query={query} setQuery={setQuery} />
        </Flex>
        <UserMenu onLogout={onLogout} setShowModal={setShowModal} />

        {showModal === 'user' && <UserModal onClose={onCloseModal} />}
        {showModal === 'password' && <PasswordModal onClose={onCloseModal} />}
        {showModal === 'terms' && <TermsdModal onClose={onCloseModal} />}
        {showModal === 'privacy-policy' && (
          <PrivacyPolicyModal onClose={onCloseModal} />
        )}
      </Flex>
      <Flex
        mt="16px"
        paddingX={['24px', '0px', '80px', '112px']}
        display={['flex', 'none']}
      >
        <SearchBar query={query} setQuery={setQuery} />
      </Flex>
    </>
  )
}
