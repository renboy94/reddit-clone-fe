import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Header from "./components/Header";

const CardContainer = styled.section`
  flex: 2;
  margin-right: 20px;
  min-height: 100vh;

  & > div:first-child {
    border: 1px solid silver;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    /* background-color: red; */
  }

  & > div:not(:first-child) {
    border-bottom: 1px solid silver;
    border-left: 1px solid silver;
    border-right: 1px solid silver;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

const Sidebar = styled.section`
  /* background-color: #f6f7f8; */
  flex: 0 0 300px;
  border-radius: 5px;
  /* border: 1px solid silver; */

  @media screen and (max-width: 768px) {
    /* margin: -580px 0; */
    /* flex: 1; */
    flex: 0 0 100px;
    margin-bottom: 20px;
    /* flex: 1; */
  }
`;

//

const Main = styled.main`
  min-height: 100vh;

  width: 90%;
  margin: 100px auto 100px auto;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* align-content: stretch; */
  /* background: green; */

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    /* margin: 100px 0; */
  }
`;

const Categories = styled.aside`
  width: 100%;
  min-height: 300px;
  /* background-color: #f6f7f8; */
  background-color: ${(p) => p.theme.primaryColor};
  border: 1px solid silver;
  border-radius: 5px;

  .title {
    text-align: center;
    padding: 20px;
    font-weight: bold;
  }

  & > ul > li {
    list-style-type: none;
    padding: 20px;
    /* border: 1px solid blue; */

    &.active {
      background-color: ${(p) => p.theme.listActiveBackgroundColor};

      @media screen and (max-width: 768px) {
        border-radius: 20px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 0;

    & > ul {
      display: flex;
      flex-wrap: wrap;
      /* justify-content: center; */
      align-items: center;
      padding: 0 20px;

      & > li {
        /* margin: 20px; */
        flex: 1;
        padding: 10px;
        text-align: center;
      }
    }
  }
`;

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
        <Sidebar>
          <Categories>
            <div className="title">Categories</div>
            <ul>
              <li className="active">all</li>
              <li>programming</li>
              <li>video games</li>
              <li>football</li>
              <li>others</li>
            </ul>
          </Categories>
        </Sidebar>
      </Main>
    </React.Fragment>
  );
}
