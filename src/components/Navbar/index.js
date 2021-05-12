import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import  {IconContext} from 'react-icons/lib'
import {
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color:'#ffff'}}>
        <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}> dolla </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                    >About</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to='discover'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'>Discover</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to='services'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    >Services</NavLinks>
                </NavItem>

                <NavItem>
                    <NavLinks to='signup'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    
                    >Sign Up</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>

        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
      </>
    )
}

export default Navbar