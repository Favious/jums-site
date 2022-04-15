import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
export default function Navbar() {
  return (
    <Nav>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  font-family: "Poppins", sans-serif;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        letter-spacing: 0.2rem;
      }
    }
  }
  .search {
    background-color: var(--white);
    display: flex;
    border-style: solid;
    border-color: var(--blue);
    align-items: center;
    gap: 1rem;
    width: 100%;
    padding: 1rem 1rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: var(--purple);
    }
    input {
      background-color: transparent;
      border: none;
      color: var(--blue);
      width: 100%;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: var(--plomo);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;

          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;
