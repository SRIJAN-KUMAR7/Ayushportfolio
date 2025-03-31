import React from 'react';
import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../data/constants';

const Projects = () => {
  const getDriveLink = (projectId) => {
    const driveLinks = {
      'project1': 'https://drive.google.com/file/d/1gJnzTtoF8P1EiolmzuzhcyohDZ5I-NdV/view',
      'project2': 'https://docs.google.com/spreadsheets/d/1_Nn5VZBrAWmwGoJKjHC0MpciqpZJi9_z/edit?gid=583440106#gid=583440106',
      'project3': 'https://drive.google.com/drive/folders/15BCSt82-SUwq8itkNb0l_CmPUHUdP-lT',
      'project4': 'https://drive.google.com/file/d/1olVqZa7y1GJ7KRFfncPgN2mAcS77Jhu2/view',
    };
    return driveLinks[projectId] || '#';
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>

        <CardContainer>
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => window.open(getDriveLink(project.id), '_blank')}
              style={{ 
                cursor: 'pointer',
                width: '330px' // Match card width
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;