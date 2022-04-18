import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Context } from "../../Store";
import Store from "../../Store";
import { Link, withRouter, useNavigate, Navigate } from "react-router-dom";
import Category from './Category'
const Home = () => {
  const nanvigate =useNavigate();
  const [state, setState]=useContext(Context);
  
  return (
    <div >
      <Navbar ></Navbar>
        UserId :{state.userId}<br />
      <center><Category /></center>
    </div>
  );
};

export default Home;
