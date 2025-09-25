import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll effect and hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past threshold
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "experience", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "education", label: "Education", href: "#education" },
    { id: "contact", label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <NavContainer className={`${isScrolled ? "scrolled" : ""} ${isVisible ? "visible" : "hidden"}`}>
      <NavContent>
        {/* Logo/Name */}
        <LogoContainer>
          <LogoText>
            Chenuka
            <LogoDot>.</LogoDot>
          </LogoText>
        </LogoContainer>

        {/* Desktop Navigation */}
        <DesktopNav>
          {navItems.map((item) => (
            <NavItem key={item.id}>
              <NavLink
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={activeSection === item.id ? "active" : ""}
              >
                {item.label}
                <NavLinkUnderline />
              </NavLink>
            </NavItem>
          ))}
        </DesktopNav>

        {/* Mobile Menu Button */}
        <MobileMenuButton
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={isMobileMenuOpen ? "open" : ""}
        >
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>

        {/* Mobile Navigation */}
        <MobileNav className={isMobileMenuOpen ? "open" : ""}>
          {navItems.map((item) => (
            <MobileNavItem key={item.id}>
              <MobileNavLink
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={activeSection === item.id ? "active" : ""}
              >
                {item.label}
              </MobileNavLink>
            </MobileNavItem>
          ))}
        </MobileNav>
      </NavContent>
    </NavContainer>
  );
};

// Styled Components
const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  
  &.scrolled {
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(20px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  &.hidden {
    transform: translateY(-100%);
  }
  
  &.visible {
    transform: translateY(0);
  }
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.025em;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const LogoDot = styled.span`
  color: #f472b6;
  -webkit-text-fill-color: #f472b6;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled.a`
  position: relative;
  color: #e2e8f0;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #ffffff;
  }
  
  &.active {
    color: #60a5fa;
  }
`;

const NavLinkUnderline = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #60a5fa, #a78bfa);
  transition: width 0.3s ease;
  
  ${NavLink}:hover & {
    width: 100%;
  }
  
  ${NavLink}.active & {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  span {
    width: 2rem;
    height: 0.25rem;
    background: #e2e8f0;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    
    &:first-child {
      transform: ${({ className }) => className === "open" ? "rotate(45deg)" : "rotate(0)"};
    }
    
    &:nth-child(2) {
      opacity: ${({ className }) => className === "open" ? "0" : "1"};
      transform: ${({ className }) => className === "open" ? "translateX(20px)" : "translateX(0)"};
    }
    
    &:nth-child(3) {
      transform: ${({ className }) => className === "open" ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const MobileNav = styled.ul`
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background: rgba(15, 23, 42, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  list-style: none;
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  
  &.open {
    right: 0;
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavItem = styled.li`
  opacity: 0;
  transform: translateY(20px);
  animation: slideIn 0.5s ease forwards;
  
  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }
  &:nth-child(6) { animation-delay: 0.6s; }
`;

const MobileNavLink = styled.a`
  color: #e2e8f0;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  transition: color 0.3s ease;
  
  &:hover {
    color: #60a5fa;
  }
  
  &.active {
    color: #60a5fa;
  }
`;

export default Navbar;