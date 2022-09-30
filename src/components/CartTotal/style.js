import styled from "styled-components";

export const StyledTotal = styled.div`
    display: flex;
    flex-direction: column;

    background-color: var(--gray-0);
    padding: 0 1rem 1rem 1rem;

    margin-bottom: 50px;

    
    div{
        border-top: 2px solid var(--gray-20);

        display: flex;
        justify-content: space-between;

        padding: 1rem 0;
    }

    p{
        font-size: 14px;
        font-weight: 600;
        color: var(--gray-100);
    }

    span{
        font-size: 14px;
        font-weight: 600;
        color: var(--gray-50);
    }

    button{
        height: 60px;

        background-color: var(--gray-20);
        
        font-size: 16px;
        font-weight: 600;
        color: var(--gray-50);

        border: none;
        border-radius: 8px;

        cursor: pointer;
    }

    button:hover{
        background-color: var(--gray-50);
        color: var(--gray-20);
    }
`