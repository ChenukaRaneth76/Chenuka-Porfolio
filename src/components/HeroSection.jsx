import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const HeroSection = () => {
  const [selectedSide, setSelectedSide] = useState("original");
  const [isAnimating, setIsAnimating] = useState(false);

  const handleModeChange = (side) => {
    if (isAnimating || selectedSide === side) return;
    setIsAnimating(true);
    setSelectedSide(side);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const tools = {
    original: [
      { name: "React", icon: "/icons/react.png", color: "#61DAFB" },
      { name: "Node.js", icon: "/icons/node.png", color: "#339933" },
      { name: "JavaScript", icon: "/icons/js.png", color: "#F7DF1E" },
      { name: "HTML", icon: "/icons/html.png", color: "#47A248" },
      { name: "Git", icon: "/icons/git.png", color: "#F05032" }
    ],
    anime: [
      { name: "Figma", icon: "/icons/figma.png", color: "#F24E1E" },
      { name: "Adobe XD", icon: "/icons/xd.png", color: "#FF61F6" },
      { name: "Photoshop", icon: "/icons/photoshop.png", color: "#31A8FF" },
      { name: "Illustrator", icon: "/icons/ilustrator.png", color: "#FF9A00" },
      { name: "Canva", icon: "/icons/canva.png", color: "#00C4CC" }
    ]
  };

  return (
    <HeroContainer>
      <BackgroundGradient />
      <FloatingShapes />
      
      <ContentWrapper>
        {/* Left Side - Text Content */}
        <TextSection>
          <MainTitle>
            Hi, I'm{" "}
            <GradientName>Chenuka</GradientName>
          </MainTitle>
          
          <RoleTitle>
            {selectedSide === "original" ? (
              <span className="role-text">Web Developer</span>
            ) : (
              <span className="role-text">UI/UX Designer</span>
            )}
          </RoleTitle>
          
          <Description>
            {selectedSide === "original"
              ? "Passionate full-stack developer crafting robust web applications with modern technologies and clean code architecture."
              : "Creative designer focused on user-centered design, creating intuitive interfaces and engaging user experiences."}
          </Description>

          {/* Mode Selection Buttons */}
          <ModeButtons>
            <ModeButton
              onClick={() => handleModeChange("original")}
              isActive={selectedSide === "original"}
              color="#8B5CF6"
            >
              <span className="icon">🎨</span>
              UI/UX Design
            </ModeButton>
            <ModeButton
              onClick={() => handleModeChange("anime")}
              isActive={selectedSide === "anime"}
              color="#3B82F6"
            >
              <span className="icon">⚡</span>
               Web Development
            </ModeButton>
          </ModeButtons>
        </TextSection>

        {/* Right Side - Image with Floating Icons */}
        <ImageSection>
          <ImageContainer>
            {/* Original Image */}
            <ProfileImage
              src="/gemini2.png"
              alt="Designer Chenuka"
              isVisible={selectedSide === "original"}
            />
            
            {/* Anime Image */}
            <ProfileImage
              src="/gemini.png"
              alt="Developer Chenuka"
              isVisible={selectedSide === "anime"}
            />

            {/* Floating Tool Icons */}
            <FloatingIcons>
              {tools[selectedSide].map((tool, index) => (
                <ToolIcon
                  key={tool.name}
                  index={index}
                  color={tool.color}
                  delay={index * 0.2}
                >
                  <img src={tool.icon} alt={tool.name} />
                  <ToolName>{tool.name}</ToolName>
                </ToolIcon>
              ))}
            </FloatingIcons>

            {/* Central Glow Effect */}
            <CentralGlow />
          </ImageContainer>
        </ImageSection>
      </ContentWrapper>
    </HeroContainer>
  );
};

// Styled Components
const HeroContainer = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 50%);
  pointer-events: none;
`;

const floatingAnimation = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
`;

const FloatingShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    animation: ${floatingAnimation} 15s infinite ease-in-out;
  }
  
  &::before {
    top: 15%;
    left: 10%;
    animation-delay: -5s;
  }
  
  &::after {
    top: 65%;
    right: 15%;
    animation-delay: -10s;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
`;

const TextSection = styled.div`
  z-index: 2;
`;

const MainTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.1;
`;

const GradientName = styled.span`
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const RoleTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  .role-text {
    background: linear-gradient(135deg, #60a5fa, #a78bfa);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeInUp 0.8s ease-out;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #94a3b8;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 500px;
  
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const ModeButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const ModeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: ${props => props.isActive ? `${props.color}20` : 'rgba(255, 255, 255, 0.05)'};
  border: 2px solid ${props => props.isActive ? props.color : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 50px;
  color: ${props => props.isActive ? props.color : '#e2e8f0'};
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    background: ${props => props.isActive ? `${props.color}30` : 'rgba(255, 255, 255, 0.1)'};
  }
  
  .icon {
    font-size: 1.2rem;
  }
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  
  @media (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }
  
  @media (max-width: 640px) {
    width: 300px;
    height: 300px;
  }
`;

const ProfileImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(5deg)'};
`;

const FloatingIcons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const ToolIcon = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid ${props => props.color};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: floatIn 0.8s ease-out forwards;
  animation-delay: ${props => props.delay}s;
  opacity: 0;
  transform: scale(0) rotate(180deg);
  
  &:hover {
    transform: scale(1.1) rotate(0deg);
    box-shadow: 0 10px 25px ${props => props.color}40;
    background: rgba(255, 255, 255, 0.2);
  }
  
  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
  
  @keyframes floatIn {
    to {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
  }
  
  /* Position each icon around the image */
  &:nth-child(1) { top: 10%; left: -30px; }
  &:nth-child(2) { top: 25%; right: -30px; }
  &:nth-child(3) { top: 50%; left: -30px; }
  &:nth-child(4) { top: 65%; right: -30px; }
  &:nth-child(5) { bottom: 15%; left: 50%; transform: translateX(-50%); }
`;

const ToolName = styled.span`
  position: absolute;
  bottom: -25px;
  font-size: 0.7rem;
  font-weight: 600;
  color: #ffffff;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ToolIcon}:hover & {
    opacity: 1;
  }
`;

const CentralGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  animation: pulse 3s ease-in-out infinite;
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
    50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
  }
`;

export default HeroSection; 