import styled from "styled-components";

export const StyledCartItem = styled.li`
    width: 100%;
    min-height: 70px;
    height: fit-content;
    padding: 0 1rem;

    display: flex;
    justify-content: space-between;
    gap: 1rem;

    .cartProduct{
        display: flex;
        gap: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    figure{
        min-width: 70px;
        height: 70px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--gray-20);
        border-radius: 4px;
    }

    img{
        min-width: 60px;
        max-width: 60px;
    }

    .cartProductTexts{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    h2{
        font-size: 18px;
        font-weight: 700;
        color: var(--gray-100);
    }

    p{
        font-size: 12px;
        font-weight: 400;
        color: var(--gray-50);
    }

    span{
        font-size: 10px;
        font-weight: 500;
        color: var(--gray-50);
        width: fit-content;
        height: fit-content;
        cursor: pointer;
    }
`