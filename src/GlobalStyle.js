import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        
        --color-white: #ffffff;
        --color-light: #f1f5f9;
        --color-black: #121212;
        --color-night: #001632;

        --color-red: #f44336;
        --color-blue: #1a73e8;
        --color-gray: #80868b;
        --color-grayish: #dadce0;

        --shadow-normal: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
         0 1px 2px 0 rgba(0, 0, 0, 0.06);
        --shadow-medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
        --shadow-large: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
         0 4px 6px -2px rgba(0, 0, 0, 0.05);

        --appleSilver: #153d77;
        --appleLightSilver: #c5cedd;

        --white: #fff;
        --black: #000;
        --blue: #246ace;
        --blueAgua: #0061A8;
        --plomo: #999999;
        --plomoAgua: #C4C4C4;
        --blueSuave: #8AB6D6;
        --purple: #3f4676;
        

        --SuperGrande: 70px;
        --TituloPrimario: 30px;
        --letraEstandar: 22px;
        --letraMediana: 20px;
        --letraPequenia: 18px;
        --letraUltraPequenia: 16px;
    }
    * {
        font-family: "Helvetica", sans-serif;
    }
    `;
