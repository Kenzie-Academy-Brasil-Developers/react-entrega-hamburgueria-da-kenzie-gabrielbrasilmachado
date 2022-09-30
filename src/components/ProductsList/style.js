import styled from "styled-components"

export const StyledUl = styled.ul`
    width: 100%;
    display: flex;
    gap: 1rem;

    margin: 0 -16px 0 auto;
    overflow-x: scroll;

    @media (min-width: 768px) {
        width: 60%;
        flex-wrap: wrap;
        justify-content: flex-start;
        overflow: hidden;

        margin: 0;
    }
    `