import React from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { Tooltip } from "@mui/material";
const HeaderContainer = styled.div`
  background-color: #6fc5fa;
  color: #fff;
`;
const HeaderSection = styled.div`
  padding: 1.3rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    cursor: pointer;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderSection>
        <h2>Student Management System</h2>
        <Tooltip title="User">
          <span>
            <FaUserAlt />
          </span>
        </Tooltip>
      </HeaderSection>
    </HeaderContainer>
  );
};

export default Header;
