import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career history & Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Dec. 2022 – Nov. 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Postdoctoral Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle">KTH - Royal Institute of Technology, Stockholm, Sweden</h4>
            <p>
              Machine Learning applied to acoustic reconstruction. Test and training of Pytorch models.
            </p>
            <p>
              Multiscale methods applied to acoustic.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2018 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">PhD in Engineering Mechanics</h3>
            <h4 className="vertical-timeline-element-subtitle">KTH - Royal Institute of Technology, Stockholm, Sweden</h4>
            <p>
              Thesis title: Study of adverse pressure gradients in turbulent boundary layers.
            </p>
            <p>
              High-performance computing. Programming. CFD. Data Analysis. Research. Teaching. International conferences.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2015 - 2017"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">MSc in Aerospace Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">E.T.S.I.Aeronáuticos, Universidad Politécnica de Madrid (UPM)</h4>
            <p>
              Thesis title: Use of Lattice–Boltzmann Method to study the fluid-structure interaction on a circular cylinder in proximity to a wall.
            </p>
            <p>
              Programming. CFD.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2009 - 2017"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Aerospace Engineering, Major in Propulsion</h3>
            <h4 className="vertical-timeline-element-subtitle">E.T.S.I.Aeronáuticos, Universidad Politécnica de Madrid (UPM)</h4>
            <p>
              Mathematical modelling, numerical methods, mathematical optimisation.
            </p>
            <p>
              Classical mechanics, fluid dynamics, thermodynamics, propulsion.
            </p>
            <p>
              Electronics and programming.
            </p>
            <p>
              CAD with Catia and FEM with Nastran/Patran.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;