import styled from "styled-components";

export const StyledLi = styled.li`
    min-width: 210px;
    width: 210px;
    height: fit-content;

    border: 2px solid var(--gray-20);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    figure{
        width: 100%;
        background-color: var(--gray-0);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    figure img{
        width: 60%;
    }

    div{
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding: 1rem;
    }

    h2{
        font-size: 18px;
        font-weight: 700;
        color: var(--gray-100);
        width: fit-content;
    }

    p{
        font-size: 12px;
        font-weight: 400;
        color: var(--gray-50);
    }

    span{
        font-size: 14px;
        font-weight: 600;
        color: var(--color-primary);
    }

    button{
        height: 40px;
        width: fit-content;
        padding: 0 20px;
        background-color: var(--color-primary);
        color: var(--gray-0);
        font-size: 14px;
        font-weight: 600;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    button:hover{
        background-color: var(--color-primary-50);
    }

    @media (min-width: 768px) {
        width: 200px;;
    }
`