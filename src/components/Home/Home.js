import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Buttons from "../Form/Buttons";

import Input from "../Form/Input";
import { BsSearch } from "react-icons/bs";
import Tables from "../Form/Tables";
import { useSelector ,useDispatch} from "react-redux";
import { student_head } from "../data";
import { listStudent } from "../Redux/action";
import AddStudent from "../Student/AddStudent";
const HomeContainer = styled.div`
  background-color: #e0e1f4;
  height: 90vh;
  padding: 2rem 2rem 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StudentLink = styled.div`
  text-decoration: none;
  .btns {
    padding: 0.3rem 1rem;
    background-color: #fff;
    text-transform: capitalize;
    border-radius: 20px;
    :hover {
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  }
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  .search {
    background-color: #fff;
    padding: 0.6rem;
  }
`;
const ButtonContainer = styled.div``;
const Home = () => {
  const [open,setOpen]=useState(false);




 
  const { students } = useSelector((state) => state.studentReducer);

  return (
    <HomeContainer>
      <TopContainer>
        <StudentLink>
          <Buttons name="Add Student" className="btns" 
          onClick={()=>{
            setOpen(true)
          }}
          />
        </StudentLink>

        <SearchContainer>
          <Input placeholder="Search Here" />
          <div className="search">
            <BsSearch />
          </div>
        </SearchContainer>
      </TopContainer>

      <ButtonContainer>
        <Tables tableHead={student_head} rows={students}/>
      </ButtonContainer>
      <AddStudent open={open} handleClose={()=>{
        setOpen(false)
      }}/>
    </HomeContainer>
  );
};

export default Home;
