import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:'Inter', sans-serif;;
    }

    ul, li, ol{
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    img {
        max-width: 100%;
    }

    html, body{
        width: 100vw;
        height: fit-content;
        max-height: 100%;
        max-width: 100%;
    }

    :root{
        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;
        --gray-100:#333333;
        --gray-50: #828282;
        --gray-20: #E0E0E0;
        --gray-0:#F5F5F5;
        --toastify-toast-min-height: 100px;
    }

    .container{
        width: 90%;
        max-width: 1200px;
        margin: 0 auto;
        height: fit-content;
        display: flex;
        flex-direction: column;
    }

    /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #27ae60 #e0e0e0;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #e0e0e0;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #27ae60;
    border-radius: 8px;
    border: 3px solid #828282;
  }

  main{
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 1200px;
    margin: 160px auto 0 auto;
  }

  @media (min-width: 768px) {
    main{
        flex-direction: row;
        justify-content: space-between;
        margin: 120px auto 0 auto;
    }
  }
`