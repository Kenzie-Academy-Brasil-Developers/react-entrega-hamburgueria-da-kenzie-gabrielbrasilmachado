import styled from "styled-components"

export const StyledUl = styled.ul`
    width: 95%;
    display: flex;
    gap: 1rem;

    overflow-x: scroll;

    @media (min-width: 768px) {
        width: 60%;
        flex-wrap: wrap;
        justify-content: flex-start;
        overflow: hidden;
    }
    `