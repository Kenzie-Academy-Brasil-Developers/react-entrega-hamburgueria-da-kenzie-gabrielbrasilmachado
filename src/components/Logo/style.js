import styled from "styled-components";

export const StyledLogo = styled.div`
    max-height: 60px;
    margin-bottom: 1rem;
    display: flex;

    p{
        font-size: 24px;
        font-weight: 800;
        color: var(--gray-100);
    }

    span{
        font-size: 16px;
        font-weight: 800;

        transform: translate(5px , 7px);

        color: #EB5757;
    }

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
`