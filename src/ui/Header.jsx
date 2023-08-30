import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Input from './Input'
import { getToday } from '../utils/helpers'
import Date from './DateTime'
import DateTime from './DateTime'
import ButtonIcon from './ButtonIcon'
import Profile from './Profile'

const StyledHeader = styled.header`
  background-color: var(--color-brand-900);
  color: var(--color-grey-100);
  padding: 1.5rem 4.9rem;
  border-bottom: 1px solid var(--color-grey-100);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`

const Main = styled.main`
  display: flex;
  justify-content: space-between;
`

export default function Header () {
  return (
    <StyledHeader>
      <Main>
        <Logo />
        <Input type='text' placeholder='search..' />
        <DateTime/>
        <Profile/>
        <ButtonIcon/>
      </Main>
    </StyledHeader>
  )
}
