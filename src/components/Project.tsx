import React from "react";
import LBM from '../assets/images/LBM_cyl_vort.png';
import Biela from '../assets/images/Master_Biela_Star_Engine.png';


import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">

            <h1>Academic publications</h1>
            <div className="publications-container">

                <div className="publications-subcontainer">
                    <h2>Papers and collaborations</h2>
                    <ol>
                        <li><a
                            href="https://www.cambridge.org/core/journals/journal-of-fluid-mechanics/article/an-adversepressuregradient-turbulent-boundary-layer-with-nearly-constant-beta-simeq-14-up-to-retheta-simeq-8700/AF766FD668168304FCBAC66369AE7F5F"
                            target="_blank" rel="noreferrer">An adverse-pressure-gradient turbulent boundary layer with nearly constant β≃1.4 up to Re<sub>θ</sub> ≃8700 </a></li>
                        <li><a href="https://journals.aps.org/prfluids/abstract/10.1103/PhysRevFluids.8.L022602" target="_blank" rel="noreferrer">Spectra of near-equilibrium adverse-pressure-gradient turbulent boundary layers</a></li>
                        <li><a href="https://pubs.aip.org/aip/pof/article/36/2/025150/3266970" target="_blank" rel="noreferrer">Widest scales in turbulent channels</a></li>
                        <li><a href="https://journals.aps.org/prfluids/abstract/10.1103/PhysRevFluids.5.114608" target="_blank" rel="noreferrer">Decomposition of the mean friction drag in adverse-pressure-gradient turbulent boundary layers</a></li>
                        <li><a href="https://www.sciencedirect.com/science/article/pii/S0142727X23000164" target="_blank" rel="noreferrer">A new perspective on skin-friction contributions in adverse-pressure-gradient turbulent boundary layers</a></li>
                    </ol>
                </div>

                <div className="publications-subcontainer">
                    <h2>PhD Thesis</h2>
                    <ol>
                        <li><a href="https://www.diva-portal.org/smash/record.jsf?pid=diva2%3A1702827&dswid=1505" target="_blank" rel="noreferrer">Study of adverse-pressure-gradient effects on a flat-plate boundary layer at high Reynolds numbers</a></li>
                    </ol>
                </div>
            </div>

            {/* Add here projects with some images*/}
            <h1>Personal Projects</h1>

            <div className="projects-grid">

                {/* Master Thesis project */}
                <div className="project-card">
                    <div className="project-image-wrapper">
                        <a href="https://github.com/Ramon-PR/ThesisMSc_2DLBM" target="_blank" rel="noreferrer">
                            <img src={LBM} className="project-image" alt="thumbnail" />
                        </a>
                    </div>
                    <div className="project-info">
                        <a href="https://github.com/Ramon-PR/ThesisMSc_2DLBM" target="_blank" rel="noreferrer">
                            <h2>2D LBM</h2>
                        </a>
                        <p>CFD code developed during my MSc based on 2D LBM.</p>
                    </div>
                </div>

                {/* CAD projects */}
                <div className="project-card">
                    <div className="project-image-wrapper">
                        <img src={Biela} className="project-image" alt="thumbnail" width="50%" />
                    </div>
                    <div className="project-info">
                        <h2>CAD projects</h2>
                        <p>CAD design with different softwares. CATIA V5, FreeCad, ...</p>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Project;