import React from 'react'
import styled from 'styled-components'

const StyledSidebar = styled.aside`
    background-color: var(--var-grey-0);
    padding: 3.2rem 2.4rem;
    border-right: 1px solid var(--color-grey-100);

    grid-row: 1/ -1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

`

export default function Sidebar() {
  return (
      <StyledSidebar>
          
    </StyledSidebar>
  )
}
