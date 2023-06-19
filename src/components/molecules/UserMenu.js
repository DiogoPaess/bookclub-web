import { Text, MenuItem } from 'components/atoms'
import { Avatar, Flex, Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { BsBookmarkStar } from 'react-icons/bs'
import { BiUser, BiCheckShield } from 'react-icons/bi'
import {
  HiOutlineDocumentText,
  HiOutlineClipboard,
  HiOutlineLogout
} from 'react-icons/hi'

export const UserMenu = () => {
  const userStore = useSelector((state) => state.user)

  const menuOptions = [
    {
      id: 0,
      icon: BsBookmarkStar,
      text: 'Favoritos',
      divider: false
    },
    {
      id: 1,
      icon: BiUser,
      text: 'Dados Pessoais',
      divider: false
    },
    {
      id: 2,
      icon: BiCheckShield,
      text: 'Alterar Senha',
      divider: true
    },
    {
      id: 3,
      icon: HiOutlineDocumentText,
      text: 'Termos de uso',
      divider: false
    },
    {
      id: 4,
      icon: HiOutlineClipboard,
      text: 'Política de Privacidade',
      divider: true
    },
    {
      id: 5,
      icon: HiOutlineLogout,
      text: 'Logout',
      divider: false
    }
  ]

  return (
    <Menu>
      <MenuButton>
        <Flex flexDir="row" alignItems="center" justifyContent="center">
          <Avatar
            name={userStore?.user?.name}
            src={userStore?.user?.avatar_url}
            w={['36px', '48px']}
            h={['36px', '48px']}
            borderWidth="2px"
            borderColor="brand.primary"
            bg="brand.greyLight"
            mr={['6px', '12px']}
          />
          <Flex display={['none', 'flex']}>
            <Text fontWeight="bold" maxLength="40px">
              {userStore?.user?.name}
            </Text>
          </Flex>
          <ChevronDownIcon boxSize="24px" />
        </Flex>
      </MenuButton>
      <MenuList>
        {menuOptions.map((item) => (
          <MenuItem
            key={`menu_item_${item.id}`}
            id={item.id}
            icon={item.icon}
            text={item.text}
            divider={item.divider}
          />
        ))}
      </MenuList>
    </Menu>
  )
}
