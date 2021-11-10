import React from "react";
import styled from "styled-components";
import { SearchInput } from "./SearchInput";
import { Link } from "react-router-dom";
import { Row } from "./layout";

const Wrapper = styled.div`
  min-width: 1182px;
  height: 106px;
  margin-bottom: 30px;
  background-color: #47a4d0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-top: 6px solid #47a4d0;
  border-bottom: 3px solid #000;
`;

const FlexRow = Row.extend`
  display: flex;
  align-items: center;
`;

const HeaderLink = styled(Link)`
  width: 290px;
  color: #ffffff;
  font-size: 36px;
  font-weight: 900;
  line-height: 33px;
  text-decoration: none;

  &:hover {
    color: #f5f5f5;
  }
`;

export const Header = ({ searchText, setSearchText }) => (
  <Wrapper>
    <FlexRow>
      <HeaderLink to="/">NISL SHOP</HeaderLink>
      <SearchInput searchText={searchText} setSearchText={setSearchText} />
    </FlexRow>
  </Wrapper>
);
