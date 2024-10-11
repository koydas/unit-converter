import { useState } from 'react'
import styled from 'styled-components'

const StyledTab = styled.div`
    &.active [data-title] {
        text-decoration: underline;
    }

    &.active [data-content] {
        display: block;
    }
`

const StyledTitle = styled.span`
`
const StyledContent = styled.span`
    display: none;
`

function tabClicked(e, setActive) {
    console.log(arr)
    if (e.target.hasAttribute("data-title"))
    {
        arr.forEach(e=> e(false))
        setActive(true)
    }
}

const arr = []

export const Title = ({children}) => <StyledTitle data-title={children}>{children}</StyledTitle>
export const Content = ({children}) => <StyledContent data-content >{children}</StyledContent>
const Tab = ({active, children}) => {
    const [isActive, setActive] = useState(active)

    arr.push(setActive)

    return <StyledTab className={isActive ? 'active' : ''} onClick={e => tabClicked(e, setActive)}>{children}</StyledTab>

}

export default Tab