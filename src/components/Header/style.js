import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: fit-content;
    padding: 1rem 0;
    background-color: var(--gray-0);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    border-bottom: 1px solid var(--gray-50);
    

    div.container{
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 768px) {
        div.container{
        flex-direction: row;
        justify-content: space-between;
    }
    }
`