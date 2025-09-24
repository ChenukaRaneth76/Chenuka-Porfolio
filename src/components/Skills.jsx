import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Programming");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = {
    Programming: {
      icon: "⚡",
      color: "#3B82F6",
      skills: [
        { name: "React.js", icon: "/icons/react.png" },
        { name: "JavaScript", icon: "/icons/js.png" },
        { name: "HTML", icon: "/icons/html.png" },
        { name: "Tailwind CSS", icon: "/icons/css.png" },
        { name: "Node.js", icon: "/icons/node.png" },
        { name: "PHP", icon: "/icons/php.png" },
        { name: "Java", icon: "/icons/java.png" },
        { name: "Bootstrap", icon: "/icons/bootstrap.png" },
        { name: "jQuery", icon: "/icons/jq.png" },
        { name: "SQL", icon: "/icons/sql.png" },
        { name: "C", icon: "/icons/c.png" },
        { name: "C++", icon: "/icons/c+.png" }
      ]
    },
    Databases: {
      icon: "🗄️",
      color: "#10B981",
      skills: [
        { name: "MySQL", icon: "/icons/mysql.png" },
        { name: "MongoDB", icon: "/icons/mb.png" },
        { name: "Firebase", icon: "/icons/fb.png" }
      ]
    },
    Design: {
      icon: "🎨",
      color: "#8B5CF6",
      skills: [
        { name: "Figma", icon: "/icons/figma.png" },
        { name: "Adobe XD", icon: "/icons/xd.png" },
        { name: "Photoshop", icon: "/icons/photoshop.png" },
        { name: "Illustrator", icon: "/icons/ilustrator.png" }
      ]
    },
    Tools: {
      icon: "🛠️",
      color: "#F59E0B",
      skills: [
        { name: "VS Code", icon: "/icons/vs.png" },
        { name: "Git & GitHub", icon: "/icons/git.png" },
        { name: "Postman", icon: "/icons/postman.png" },
        { name: "Jira", icon: "/icons/jira.png" },
        { name: "Katlon Studio", icon: "/icons/katlon.png" }
      ]
    },
    Soft: {
      icon: "🌟",
      color: "#EC4899",
      skills: [
        { name: "Leadership", icon: "/icons/ld.png" },
        { name: "Teamwork", icon: "/icons/tm.png" },
        { name: "Communication", icon: "/icons/cm.png" },
        { name: "Problem Solving", icon: "/icons/ps.png" }
      ]
    }
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closePopup = () => {
    setSelectedSkill(null);
  };

  return (
    <SkillsSection ref={sectionRef} id="skills">
      <BackgroundGradient />
      
      <Container className={isVisible ? "visible" : ""}>
        <HeaderSection>
          <Title>
            <span className="gradient-text">Skills</span>
            <span className="subtitle">& Expertise</span>
          </Title>
          <Description>
            A comprehensive showcase of my technical abilities and professional competencies
          </Description>
        </HeaderSection>

        <CategoryTabs>
          {Object.entries(skillCategories).map(([category, data]) => (
            <CategoryTab
              key={category}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "active" : ""}
              color={data.color}
            >
              <span className="icon">{data.icon}</span>
              <span className="label">{category}</span>
            </CategoryTab>
          ))}
        </CategoryTabs>

        <SkillsGrid>
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <SkillItem
              key={skill.name}
              index={index}
              color={skillCategories[activeCategory].color}
              onClick={() => handleSkillClick(skill)}
            >
              <SkillIcon src={skill.icon} alt={skill.name} />
              <SkillName>{skill.name}</SkillName>
            </SkillItem>
          ))}
        </SkillsGrid>

      </Container>

      {/* Skill Popup */}
      {selectedSkill && (
        <PopupOverlay onClick={closePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closePopup}>×</CloseButton>
            <PopupImage src={selectedSkill.icon} alt={selectedSkill.name} />
            <PopupTitle>{selectedSkill.name}</PopupTitle>
          </PopupContent>
        </PopupOverlay>
      )}
    </SkillsSection>
  );
};

// Styled Components
const SkillsSection = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%);
  overflow: hidden;
  padding: 120px 0 80px;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  
  .gradient-text {
    background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .subtitle {
    color: #94a3b8;
    font-size: 2rem;
    font-weight: 400;
    margin-left: 1rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    .subtitle { font-size: 1.5rem; margin-left: 0.5rem; }
  }
`;

const Description = styled.p`
  color: #94a3b8;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const CategoryTab = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: #e2e8f0;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  
  &.active {
    background: ${props => props.color}20;
    border-color: ${props => props.color};
    color: ${props => props.color};
    box-shadow: 0 0 20px ${props => props.color}40;
  }
  
  .icon {
    font-size: 1.2rem;
  }
  
  .label {
    font-size: 0.9rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateY(30px);
  animation: slideInUp 0.6s ease forwards;
  animation-delay: ${props => props.index * 0.1}s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: ${props => props.color}40;
  }
  
  @keyframes slideInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SkillIcon = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  transition: all 0.3s ease;
  
  ${SkillItem}:hover & {
    filter: brightness(1) invert(0);
    transform: scale(1.1);
  }
`;

const SkillName = styled.h3`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  margin: 0;
`;

const AdditionalSkills = styled.div`
  text-align: center;
`;

const AdditionalTitle = styled.h3`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const AdditionalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const AdditionalSkill = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1rem;
  color: #e2e8f0;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0;
  transform: scale(0.8);
  animation: popIn 0.5s ease forwards;
  animation-delay: ${props => props.index * 0.1}s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.05);
    border-color: rgba(96, 165, 250, 0.5);
  }
  
  @keyframes popIn {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

// Popup Components
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const PopupContent = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  position: relative;
  max-width: 400px;
  animation: scaleIn 0.3s ease;
  
  @keyframes scaleIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(90deg);
  }
`;

const PopupImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin: 0 auto 1rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
`;

const PopupTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

export default Skills;