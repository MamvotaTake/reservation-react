import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers
} from 'react-icons/hi2'
import { LiaPlaneSolid, LiaAddressBookSolid } from 'react-icons/lia'
import { BsBookmark } from 'react-icons/bs'
import { AiOutlineSchedule } from 'react-icons/ai'

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-lg);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-grey-900);
    transition: all 0.3s;
    font-weight: 600;

  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-grey-900);
    font-weight: 200;

  }
`

export default function MainNav () {
  return (
    <nav>
      <NavList>
        <StyledNavLink to='/home'>
          <HiOutlineHome />
          <span>Home</span>
        </StyledNavLink>
        <StyledNavLink to='/tables'>
          <BsBookmark />
          <span>Tables</span>
        </StyledNavLink>
        <StyledNavLink to='/schedule'>
          <AiOutlineSchedule />
          <span>Schedule</span>
        </StyledNavLink>
        <StyledNavLink to='/stock'>
          <LiaAddressBookSolid />
          <span>Stock</span>
        </StyledNavLink>
        <StyledNavLink to='/holidays'>
          <LiaPlaneSolid />
          <span>Holidays</span>
        </StyledNavLink>
        <StyledNavLink to='/calendar'>
          <HiOutlineCalendarDays />
          <span>Calendar</span>
        </StyledNavLink>
        <StyledNavLink to='/settings'>
          <HiOutlineCog6Tooth />
          <span>Settings</span>
        </StyledNavLink>
      </NavList>
    </nav>
  )
}