// import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./Routerss.css";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import NotFound from "./NotFound";
import Navbars from "./Navbars";
import Users from "./Users";
import Slot from "../Slot_Machine/Slot";
import QueAns from "../Accordian/QueAns";
import EventHandling from "../EventHandling/EventHandling";
import Form from "../ForminReact/Form";
import LoginForm from "../ForminReact/LoginForm";
import Keep from "../GoogleKeep/Keep";
import Clickme from "../HookinReact/Clickme";
import Getdate from "../HookinReact/Getdate";
import Digitalclock from "../HookinReact/Digitalclock";
import Count from "../Incre_Decre_Count/Count";
import Material from "../Incre_Decre_Count/Material";
import Netflix from "../Netflix_App/Netflix";
import Todolist from "../TodoApp/Todolist";
import UseParams from "../State/UseParams";
import Search from "../State/Search";
import Contact from "./Contact";
import Other from "./Other";
import Company from "./Company";
import Channel from "./Channel";
import Login from "./Login";
import Protected from "./Protected";
import Bootstrap from "./Bootstrap";
const Routers = () => {
    return (
        <>
            <Navbars />
            <div className="app">
                <Routes>
                        {/* <Route path="/" element={<Home />} /> */}
                        <Route path="/" element={ < Protected Component={Home} /> } />
                        <Route path="/About" element={ < Protected Component={About} /> } />
                        <Route path="/Services" element={< Protected Component={Services} />} />
                        <Route path="/Contact" element={<Contact />}>
                            <Route path="Company" element={<Company />} />
                            <Route path="Channel" element={<Channel />} />
                            <Route path="Other" element={<Other />} />
                        </Route>
                        <Route path="/Bootstrap" element={<Bootstrap />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Users/:name" element={<Users />} />
                        <Route path="/Slot" element={<Slot />} />
                        <Route path="/QueAns" element={<QueAns />} />
                        <Route path="/EventHandling" element={<EventHandling />} />
                        <Route path="/Form" element={<Form />} />
                        <Route path="/Keep" element={<Keep />} />
                        <Route path="/Clickme" element={<Clickme />} />
                        <Route path="/Getdate" element={<Getdate />} />
                        <Route path="/LoginForm" element={<LoginForm />} />
                        <Route path="/Digitalclock" element={<Digitalclock />} />
                        <Route path="/Count" element={<Count />} />
                        <Route path="/Material" element={<Material />} />
                        <Route path="/Netflix" element={<Netflix />} />
                        <Route path="/Todolist" element={<Todolist />} />
                        <Route path="/UseParams/:fname/:lname" element={<UseParams />} />
                        <Route path="/Search" element={<Search />} />
                        <Route path="*" element={<NotFound />} />
                        {/* <Route path="*" element={<Navigate to="/" />} /> */}
                         

                </Routes>
            </div>
        </>
    )
}
export default Routers;