import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import LBM from '../assets/images/LBM_cyl_vort.png';

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
                <div className="project">
                    <a href="https://github.com/Ramon-PR/ThesisMSc_2DLBM" target="_blank" rel="noreferrer"><img src={LBM} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://github.com/Ramon-PR/ThesisMSc_2DLBM" target="_blank" rel="noreferrer"><h2>2D LBM</h2></a>
                    <p>CFD code developed during my MSc based on 2D LBM.</p>
                </div>
                {/* <div className="project">
                    <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                    <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
                </div>
                <div className="project">
                    <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                    <p>Designed, developed, and launched a 3D multiplayer racing game with C# and Unity. This is available on Itch.io for gamers worldwide to enjoy.</p>
                </div> */}
            </div>


        </div>
    );
}

export default Project;