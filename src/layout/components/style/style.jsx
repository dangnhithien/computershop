import styled from "styled-components";

const StyleHeader = styled.div`
  .main-menu {
    position: relative;
    margin-top: 15px;
    margin-bottom: 5px;
    nav > ul > li {
      position: relative;
      display: inline-block;
    }

    nav > ul > .has-dropdown {
      margin-right: 5px;
      &:last-child {
        margin-right: 0;
      }
    }
    nav > ul > .has-megaitem {
      position: static;
    }

    nav > ul > li > a {
      display: block;
      line-height: 24px;
      padding: 15px 30px;
      font-size: 16px;
      line-height: 30px;
      text-transform: uppercase;
      font-weight: bold;
      color: #155263;

      &:hover,
      &.active {
        color: #ff9a3c;
        font-weight: bold;
      }
    }
  }

  .sub-menu > li > a,
  .mega-menu-sub > li > a {
    font-weight: 400;
    display: block;
    line-height: 35px;
    text-transform: capitalize;
    color: #666;
    position: relative;
    transition: all 0.3s ease 0s;
    &::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 0;
      transform: translate(0px, -50%);
      height: 5px;
      width: 5px;
      border-radius: 50%;
      background: #ff9a3c;
      visibility: hidden;
      opacity: 0;
      transition: all 0.3s ease 0s;
    }
    &:hover {
      color: #ff9a3c;
      transform: translateX(10px);
    }

    &:hover::after {
      transform: translate(-10px, -50%);
      visibility: visible;
      opacity: 1;
    }
  }

  .sub-menu {
    position: absolute;
    min-width: 230px;
    padding: 25px 20px;
    background: #fff;
    box-shadow: 0 3px 11px 0 rgba(0, 0, 0, 0.1);
    transform: perspective(600px) rotateX(-90deg);
    transform-origin: 0 0 0;
    left: 0;
    right: auto;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
    z-index: 99;
    top: 100%;
    text-align: left;
  }

  .mega-menu {
    position: absolute;
    min-width: 100%;
    padding: 25px 30px 30px 30px;
    background: #fff;
    box-shadow: 0 3px 11px 0 rgba(0, 0, 0, 0.1);
    transform: perspective(600px) rotateX(-90deg);
    transform-origin: 0 0 0;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;
    z-index: 99;
    top: 100%;
    text-align: left;
  }

  .mega-menu-inner {
    display: flex;
    justify-content: space-between;
  }

  .mega-menu-item-title {
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    font-weight: 700;
    display: block;
    margin-bottom: 13px;
    color: #333;
    &:hover {
      color: #ff9a3c;
    }
  }

  .mega-menu-sub > li {
    display: block;
  }

  .main-menu nav > ul > li:hover .sub-menu,
  .main-menu nav > ul > li:hover .mega-menu {
    opacity: 1;
    visibility: visible;
    transform: perspective(600px) rotateX(0deg);
  }

  .menu-banner {
    margin-top: 20px;

    & > a {
      display: block;
      width: 100%;
    }

    & img {
      width: 100%;
    }
  }
`;
const StyleLogo = styled.div`
  font-size: 25px;
  color: #ff6f3c;
  text-shadow: -2px 1px 0px #ff6f3c75;
  font-family: "Pacifico", cursive;
  width: 140px;
  height: 75px;
  img {
    height: 100%;
  }
`;
const StyleContentDropdown = styled.div`
  font-size: 16px;
  .active {
    color: #ff6f3c;
    transition: all 2s ease;
  }

  .type {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    cursor: pointer;
    text-transform: capitalize;
    font-weight: 600;
    padding: 8px 12px 8px 16px;
    &:hover {
      background-color: rgba(145, 158, 171, 0.08);
      border-radius: 6px;
    }

    svg {
      margin-left: auto;
    }
  }
`;
const StyleFooter = styled.div`
  .footer {
    display: flex;
    flex-flow: row wrap;
    padding: 30px 100px 20px 100px;

    color: #155263;
    background-color: #fff;
  }

  .footer > * {
    flex: 1 100%;
  }

  .footer__addr {
    margin-right: 1.25em;
    margin-bottom: 2em;
  }

  .footer__logo {
    font-family: "Pacifico", cursive;
    font-weight: 400;
    text-transform: lowercase;
    font-size: 1.5rem;
    color: #ff6f3c;
  }

  .footer__addr h2 {
    margin-top: 1.3em;
    font-size: 15px;
    font-weight: 400;
  }

  .nav__title {
    font-weight: 400;
    font-size: 15px;
  }

  .footer address {
    font-style: normal;
    color: #999;
  }

  .footer__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    max-width: max-content;
    background-color: rgb(33, 33, 33, 0.07);
    border-radius: 100px;
    color: #2f2f2f;
    line-height: 0;
    margin: 0.6em 0;
    font-size: 1rem;
    padding: 0 1.3em;
  }

  .footer ul {
    list-style: none;
    padding-left: 0;
  }

  .footer li {
    line-height: 2em;
  }

  .footer a {
    text-decoration: none;
  }

  .footer__nav {
    display: flex;
    flex-flow: row wrap;
  }

  .footer__nav > * {
    flex: 1 50%;
    margin-right: 1.25em;
  }

  .nav__ul a {
    color: #999;
  }

  .nav__ul--extra {
    column-count: 2;
    column-gap: 1.25em;
  }

  @media screen and (min-width: 24.375em) {
    .legal .legal__links {
      margin-left: auto;
    }
  }

  @media screen and (min-width: 40.375em) {
    .footer__nav > * {
      flex: 1;
    }

    .nav__item--extra {
      flex-grow: 2;
    }

    .footer__addr {
      flex: 1 0px;
    }

    .footer__nav {
      flex: 2 0px;
    }
  }
`;
const StyleInfoBox = styled.div`
  border-top: 1px solid rgba(145, 158, 171, 0.32);
  border-bottom: 1px dotted rgba(145, 158, 171, 0.32);
  padding: 10px 50px;
  margin-top: 12px;

  background-color: #fff;
  color: #155263;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
      font-size: 18px;
      font-weight: 600;
    }
    .icon {
      font-size: 60px;
      margin-right: 20px;
    }
  }
`;
export {
  StyleHeader,
  StyleContentDropdown,
  StyleLogo,
  StyleFooter,
  StyleInfoBox,
};
