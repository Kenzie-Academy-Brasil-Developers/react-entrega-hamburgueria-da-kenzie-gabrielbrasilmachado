import styled from "styled-components";

export const StyledInputForm = styled.form`
    position: relative;
    width: 100%;
    max-width: 365px;
    max-height: 60px;
    input{
        height: 60px;
        width: 100%;
        border: 2px solid var(--gray-20);
        border-radius: 8px;
        color: var(--gray-50);
        font-size: 16px;
        font-weight: 400;
        padding-left: 10px;
    }

    input:focus{
        outline: none;
        border-color: var(--gray-100);
    }

    input::placeholder{
        color: var(--gray-20);
    }

    button{
        height: 40px;
        width: fit-content;
        padding: 0 20px;
        position: absolute;
        top: 10px;
        right: 10px;

        background-color: var(--color-primary);

        font-size: 14px;
        font-weight: 600;
        color: var(--gray-0);

        border: none;
        border-radius: 8px;
        
        cursor: pointer;
    }

    button:hover{
        background-color: var(--color-primary-50);
    }
`