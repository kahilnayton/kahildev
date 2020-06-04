import React from 'react';
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaGit,
  FaGithub,
  FaNodeJs,
  FaAws,
} from 'react-icons/fa';
import {
  DiCss3,
  DiRuby,
  DiJsBadge,
  DiSass,
  DiPostgresql,
} from 'react-icons/di';
import { GrGatsbyjs } from 'react-icons/gr';
import styled from 'styled-components';

const Li = styled.li`
  &:hover {
    transform: scale(1.2);
  }
`;

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">Languages &amp; Tools</h2>
      <ul>
        <Li>
          <FaReact className="fab fa-react icon-size" />
          <h4 className="about-subtitle block">React</h4>
        </Li>
        <Li>
          <FaPython className="fab fa-python icon-size" />
          <h4 className="about-subtitle block">Python</h4>
        </Li>
        <Li>
          <DiPostgresql className="fas fa-database icon-size" />
          <h4 className="about-subtitle block">PostgreSQL</h4>
        </Li>
        <Li>
          <FaHtml5 className="fab fa-html5 icon-size" />
          <h4 className="about-subtitle block">HTML5</h4>
        </Li>
        <Li>
          <DiCss3 className="fab fa-css3-alt icon-size" />
          <h4 className="about-subtitle block">CSS3</h4>
        </Li>
        <Li>
          <DiSass className="fab fa-css3-alt icon-size" />
          <h4 className="about-subtitle block">SASS</h4>
        </Li>
        <Li>
          <DiJsBadge className="fab fa-js-square icon-size" />
          <h4 className="about-subtitle block">JavaScript</h4>
        </Li>
        <Li>
          <FaGit className="fab fa-git-square icon-size" />
          <h4 className="about-subtitle block">Git</h4>
        </Li>
        <Li>
          <FaGithub className="fab fa-github icon-size" />
          <h4 className="about-subtitle block">Github</h4>
        </Li>

        <Li>
          <DiRuby className="ruby icon-size" />
          <h4 className="about-subtitle block">Ruby</h4>
        </Li>

        <Li>
          <FaNodeJs className="fab fa-node icon-size" />
          <h4 className="about-subtitle block">Node.js</h4>
        </Li>
        <Li>
          <FaAws className="fab fa-Aws icon-size" />
          <h4 className="about-subtitle block">Node.js</h4>
        </Li>
        <Li>
          <GrGatsbyjs className="fab fa-gatsby icon-size" />
          <h4 className="about-subtitle block">Node.js</h4>
        </Li>
      </ul>
    </section>
  );
}