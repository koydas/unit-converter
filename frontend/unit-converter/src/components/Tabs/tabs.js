import styled from "styled-components"

const StyledTabs = styled.div`
    display: flex;
    justify-content: space-around;
    `

const Tabs = ({children}) => <StyledTabs>{children}</StyledTabs>

export default Tabs
