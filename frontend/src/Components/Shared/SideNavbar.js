///////////////////////// Developer       : Gimhani Harshika  /////////////////////////
///////////////////////// Modified Date   : 12-02-2023     /////////////////////////
/////////////////////////           (START)                /////////////////////////

import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { CDBSidebarMenuItem } from "cdbreact";

import { MdManageAccounts, MdScheduleSend } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { FaUsers, FaUserEdit, FaUserTag, FaUserPlus, FaBars } from "react-icons/fa";

let iconStyle = { fontWeight: "600", color: "#fff", fontSize: "2rem" };

export const MenuItems = [
    {
        Role: 'member',
        Name: "Mr.Member",
        NavsArray: [
            {
                text: 'View and Update Personal Info',
                icon: <FaUserEdit style={iconStyle} />,
                path: "/member-view-update",
            },
            {
                text: 'Manage Schedule',
                icon: <AiFillSchedule style={iconStyle} />,
                path: "/member-manage-schedule",
            },
            {
                text: 'Manage Registered Gym',
                icon: <MdManageAccounts style={iconStyle} />,
                path: "/user-gym-home",
            },
        ],
    },
    {
        Role: 'coach',
        Name: "Mr.Coach",
        NavsArray: [
            {
                text: 'View and Update Personal Info',
                icon: <FaUserEdit style={iconStyle} />,
                path: "/coach-view-update",
            },
            {
                text: 'Schedule Request',
                icon: <MdScheduleSend style={iconStyle} />,
                path: "/coach-schedule-request",
            },
            {
                text: 'Manage Registered Gym',
                icon: <MdManageAccounts style={iconStyle} />,
                path: "/coach-gym-home",
            },
        ],
    },
    {
        Role: 'gym',
        Name: "Mr.Gym",
        NavsArray: [
            {
                text: 'View and Update Personal Info',
                icon: <FaUserEdit style={iconStyle} />,
                path: "/gym-view-update",
            },
            {
                text: 'View All Gym Members',
                icon: <FaUsers style={iconStyle} />,
                path: "/gym-view-members",
            },
            {
                text: 'View Single Gym Member',
                icon: <FaUserTag style={iconStyle} />,
                path: "/gym-view-member",
            },
            {
                text: 'Add Gym Coach',
                icon: <FaUserPlus style={iconStyle} />,
                path: "/gym-add-coach",
            },
            {
                text: 'View All Gym Coaches',
                icon: <FaUsers style={iconStyle} />,
                path: "/gym-view-coaches",
            },
        ],
    },
    {
        Role: 'admin',
        Name: "Mr.Admin",
        NavsArray: [
            {
                text: 'View All Users',
                icon: <FaUsers style={iconStyle} />,
                path: "/admin-view-users",
            },
            {
                text: 'View All Gyms',
                icon: <MdScheduleSend style={iconStyle} />,
                path: "/admin-view-gyms",
            },
            {
                text: 'Add Gym',
                icon: <FaUserPlus style={iconStyle} />,
                path: "/admin-add-gym",
            },
        ],
    },
]

const Container = styled.div`
    display: flex;
    z-index: 10999;
`
const Sidebar = styled.div`
    background: #333;
    color: #fff;
    height: 100vh;
    width: 300px;
    transition: all 0.05s;
`
const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 40px;
    border-bottom: 0.1rem solid grey ;

`
const Row = styled.div`
    display: flex;
    flex-direction: row;
`
const UserRole = styled.h2`
    font-size: 30px;
    letter-spacing: 0.1rem;
    display: flex;
`
const Toggle = styled.div`
    display: flex;
    font-size: 27px;
    margin-top: 8px;

    &:hover{
        cursor: pointer;
    }
    
`
const UserName = styled.div`
    margin-right: 90px;
`
const BottomSection = styled.div`
    margin-top: 30px;
`

const StyledNavLink = styled(NavLink)`
    display: flex;
    color: #fff;
    padding: 20px 15px;
    gap: 15px;
    transition: all 0.5s;
    text-decoration: none;
    height: 80px;

    &:hover{
        background: lightskyblue;
        color: #000;
        transition: all 0.5s;
    }
    &:active{
        background: lightskyblue;
        color: #000;
    }

`
const MenuIcon = styled.div`
    margin-left: 20px;
`
const MenuText = styled.div`
    font-size: 18px;
    margin-left: 10px;
    text-decoration: none;
`
const SignoutText = styled.div`
`
const Signout = styled.div`
    margin-right: 1px;
`

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 50%;
    height: 15%;

    &:hover{
        cursor: pointer;
    }
`
const SideNavbar = (props) => {
    const [userType, setUserType] = useState(props.userRole);

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container>
            <Sidebar style={{ width: isOpen ? "300px" : "90px" }}>
                <TopSection>
                    {
                        userType === "member" ?
                            <React.Fragment>
                                <Row>
                                    <UserRole style={{ display: isOpen ? "block" : "none" }}>
                                        Member
                                    </UserRole>
                                    <Toggle style={{ marginLeft: isOpen ? "50px" : "0px" }}>
                                        <FaBars onClick={toggle} />
                                    </Toggle>
                                </Row>
                                <UserName style={{ display: isOpen ? "block" : "none" }}>
                                    {MenuItems[0].Name}
                                </UserName>
                            </React.Fragment>
                            :
                            userType === "coach" ?
                                <React.Fragment>
                                    <Row>
                                        <UserRole style={{ display: isOpen ? "block" : "none" }}>
                                            Coach
                                        </UserRole>
                                        <Toggle style={{ marginLeft: isOpen ? "50px" : "0px" }}>
                                            <FaBars onClick={toggle} />
                                        </Toggle>
                                    </Row>
                                    <UserName style={{ display: isOpen ? "block" : "none" }}>
                                        {MenuItems[1].Name}
                                    </UserName>
                                </React.Fragment>
                                :
                                userType === "gym" ?
                                    <React.Fragment>
                                        <Row>
                                            <UserRole style={{ display: isOpen ? "block" : "none" }}>
                                                Gym
                                            </UserRole>
                                            <Toggle style={{ marginLeft: isOpen ? "50px" : "0px" }}>
                                                <FaBars onClick={toggle} />
                                            </Toggle>
                                        </Row>
                                        <UserName style={{ display: isOpen ? "block" : "none" }}>
                                            {MenuItems[2].Name}
                                        </UserName>
                                    </React.Fragment>
                                    :
                                    userType === "admin" ?
                                        <React.Fragment>
                                            <Row>
                                                <UserRole style={{ display: isOpen ? "block" : "none" }}>
                                                    Admin
                                                </UserRole>
                                                <Toggle style={{ marginLeft: isOpen ? "50px" : "0px" }}>
                                                    <FaBars onClick={toggle} />
                                                </Toggle>
                                            </Row>
                                            <UserName style={{ display: isOpen ? "block" : "none" }}>
                                                {MenuItems[3].Name}
                                            </UserName>
                                        </React.Fragment>
                                        : null
                    }

                </TopSection>

                <BottomSection>

                    {
                        userType === "member" ?
                            MenuItems[0].NavsArray.map((item, index) => {
                                return (
                                    <StyledNavLink to={item.path} key={index} activeclassName="active" className="MenuLink">
                                        <MenuIcon>
                                            {item.icon}
                                        </MenuIcon>
                                        <MenuText style={{ display: isOpen ? "block" : "none" }}>
                                            {item.text}
                                        </MenuText>
                                    </StyledNavLink>
                                )
                            }) :
                            userType === "coach" ?
                                MenuItems[1].NavsArray.map((item, index) => {
                                    return (
                                        <StyledNavLink to={item.path} key={index} activeclassName="active" className="MenuLink">
                                            <MenuIcon>
                                                {item.icon}
                                            </MenuIcon>
                                            <MenuText style={{ display: isOpen ? "block" : "none" }}>
                                                {item.text}
                                            </MenuText>
                                        </StyledNavLink>
                                    )
                                }) :
                                userType === "gym" ?
                                    MenuItems[2].NavsArray.map((item, index) => {
                                        return (
                                            <StyledNavLink to={item.path} key={index} activeclassName="active" className="MenuLink">
                                                <MenuIcon>
                                                    {item.icon}
                                                </MenuIcon>
                                                <MenuText style={{ display: isOpen ? "block" : "none" }}>
                                                    {item.text}
                                                </MenuText>
                                            </StyledNavLink>
                                        )
                                    }) :
                                    userType === "admin" ?
                                        MenuItems[3].NavsArray.map((item, index) => {
                                            return (
                                                <StyledNavLink to={item.path} key={index} activeclassName="active" className="MenuLink">
                                                    <MenuIcon>
                                                        {item.icon}
                                                    </MenuIcon>
                                                    <MenuText style={{ display: isOpen ? "block" : "none" }}>
                                                        {item.text}
                                                    </MenuText>
                                                </StyledNavLink>
                                            )
                                        }) : null
                    }

                </BottomSection>
                <Footer>
                    <Signout>
                        <NavLink
                            to=""
                            className={({ isActive }) => (isActive ? "active" : null)}
                            style={{ textDecoration: "none", fontSize: "20px", color: "grey", }}
                        >
                            <CDBSidebarMenuItem icon="fa-light fa-arrow-right-from-bracket" >
                                <SignoutText style={{ display: isOpen ? "block" : "none" }}>
                                    Sign Out
                                </SignoutText>
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </Signout>
                </Footer>
            </Sidebar>
        </Container >
    );
}

export default SideNavbar;

/////////////////////////           (END)                /////////////////////////