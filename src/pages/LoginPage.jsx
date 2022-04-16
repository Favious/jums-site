import React, { useEffect } from "react";
import styled from "styled-components";

export default function LoginPage() {
  return (
    <Section>
      <div class="main">
        <div class="container">
          <section class="wrapper">
            <div class="heading">
              <h1 class="welcome">Bienvenido a JUMSite!</h1>
              <h1 class="text text-large">Iniciar sesion</h1>
              <p class="text text-normal">Por favor ingrese su cuenta</p>
            </div>
            <form name="login" class="form">
              <div class="input-control">
                <label for="email" class="input-label" hidden>
                  Correo electronico
                </label>
                <input
                  type="email"
                  name="email"
                  class="input-field"
                  placeholder="Correo electronico"
                />
              </div>
              <div class="input-control">
                <label for="password" class="input-label" hidden>
                  Contrasenia
                </label>
                <input
                  type="password"
                  name="password"
                  class="input-field"
                  placeholder="Contrasenia"
                />
              </div>
              <div class="input-control">
                <input
                  type="button"
                  name="submit"
                  class="input-submit"
                  value="Ingresar"
                  disabled
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: var(--appleSilver);
  height: 100vh;
  html {
    font-size: 100%;
    font-size-adjust: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
    list-style: none;
    list-style-type: none;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  .main {
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
    color: var(--color-black);
  }

  .welcome {
    color: var(--appleSilver);
    font-size: 2.7rem;
    font-weight: 600;
    padding: 0 0 1rem 0;
    text-align: center;
  }

  a,
  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  // Components
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 80rem;
    min-height: 100vh;
    width: 100%;
    padding: 0 2rem;
    margin: 0 auto;
  }

  .ion {
    &-logo-apple {
      font-size: 1.65rem;
      line-height: inherit;
      margin-right: 0.5rem;
      color: var(--color-black);
    }
    &-logo-google {
      font-size: 1.65rem;
      line-height: inherit;
      margin-right: 0.5rem;
      color: var(--color-red);
    }
    &-logo-facebook {
      font-size: 1.65rem;
      line-height: inherit;
      margin-right: 0.5rem;
      color: var(--color-blue);
    }
  }

  .text {
    font-family: inherit;
    line-height: inherit;
    text-transform: unset;
    text-rendering: optimizeLegibility;

    &-large {
      font-size: 2rem;
      font-weight: 600;
      color: var(--color-black);
    }

    &-normal {
      font-size: 1rem;
      font-weight: 400;
      color: var(--color-black);
    }

    &-links {
      font-size: 1rem;
      font-weight: 400;
      color: var(--color-blue);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  // Main
  .main {
    .wrapper {
      max-width: 28rem;
      width: 100%;
      margin: 2rem auto;
      padding: 2rem 2.5rem;
      border: none;
      outline: none;
      border-radius: 0.25rem;
      color: var(--color-black);
      background: var(--white);
      box-shadow: var(--shadow-large);
      border-radius: 1rem;

      .form {
        width: 100%;
        height: auto;
        margin-top: 2rem;

        .input-control {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .input-field {
          font-family: inherit;
          font-size: 1rem;
          font-weight: 400;
          line-height: inherit;
          width: 100%;
          height: auto;
          padding: 0.75rem 1.25rem;
          border: none;
          outline: none;
          border-radius: 2rem;
          color: var(--color-black);
          background: var(--color-light);
          text-transform: unset;
          text-rendering: optimizeLegibility;
        }

        .input-submit {
          font-family: inherit;
          font-size: 1rem;
          font-weight: 500;
          line-height: inherit;
          cursor: pointer;
          min-width: 40%;
          margin: auto;
          height: auto;
          padding: 0.65rem 1.25rem;
          border: none;
          outline: none;
          border-radius: 2rem;
          color: var(--color-white);
          background: var(--blue);
          box-shadow: var(--shadow-medium);
          text-transform: capitalize;
          text-rendering: optimizeLegibility;
        }
      }

      .striped {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;

        &-line {
          flex: auto;
          flex-basis: auto;
          border: none;
          outline: none;
          height: 2px;
          background: var(--color-grayish);
        }

        &-text {
          font-family: inherit;
          font-size: 1rem;
          font-weight: 500;
          line-height: inherit;
          color: var(--color-black);
          margin: 0 1rem;
        }
      }

      .method {
        &-control {
          margin-bottom: 1rem;
        }

        &-action {
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 500;
          line-height: inherit;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: auto;
          padding: 0.35rem 1.25rem;
          outline: none;
          border: 2px solid var(--color-grayish);
          border-radius: 2rem;
          color: var(--color-black);
          background: var(--color-white);
          text-transform: capitalize;
          text-rendering: optimizeLegibility;
          transition: all 0.35s ease;

          &:hover {
            background: var(--color-light);
          }
        }
      }
    }
  }
`;
