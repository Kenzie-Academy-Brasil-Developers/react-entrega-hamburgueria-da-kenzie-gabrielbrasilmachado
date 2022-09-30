import styled from "styled-components";

export const StyledCounter = styled.div`
    display: flex;
    gap:2px;

    p{
        height: 24px;
        width: 24px;
        text-align: center;
        border: 2px solid var(--gray-100);
        border-radius: 4px;
    }

    button{
        height: 24px;
        width: 24px;

        font-size: 16px;
        font-weight: 700;
        color: var(--gray-0);

        background-color: var(--color-primary);

        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover{
        background-color: var(--color-primary-50);
    }
`