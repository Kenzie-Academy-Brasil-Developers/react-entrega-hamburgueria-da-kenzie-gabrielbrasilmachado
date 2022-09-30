import styled from "styled-components";

export const StyledCart = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;

    .cartTittle{
        height: 65px;
        padding-top: 1.3rem;
        padding-left: 1rem;

        font-size: 18px;
        font-weight: 700;
        color: var(--gray-0);

        background-color: var(--color-primary);

        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    ul{
        background-color: var(--gray-0);

        min-height: 200px;
        max-height: 300px;
        overflow-y: auto;

        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 0;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    .emptyCart{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        margin-top: 50px;
    }

    .emptyCart p{
        font-size: 18px;
        font-weight: 700;
        color: var(--gray-100);
    }

    .emptyCart span{
        font-size: 14px;
        font-weight: 400;
        color: var(--gray-50);
    }

    @media (min-width: 768px) {
        width: 365px;
        height: 200px;
        position: sticky;
        top: 120px;
        margin: 0;
    }
`