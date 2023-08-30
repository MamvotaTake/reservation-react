import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineClockCircle, AiOutlineSchedule } from 'react-icons/ai'
import moment from 'moment'

const StyledDate = styled.div`
  display: flex;
  /* background-color: var(--color-grey-700); */
  color: var(--color-grey-200);
  border-radius: var(--border-radius-lg);
  padding: 1rem;
  font-size: 2rem;

  & svg {
    display: flex;
    margin: .6rem;
    width: 1.8rem;
    height: 1.8rem;
    transition: all 0.3s;
    font-weight: 600;
  }
`

export default function DateTime () {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)

    return function cleanup () {
      clearInterval(timer)
    }
  })

  console.log(date.toLocaleTimeString())

  return (
    <StyledDate>
      <AiOutlineClockCircle />
      <span>
        {moment(date).format('HH:MM a')}
      </span>
    </StyledDate>
  )
}
