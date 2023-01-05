import React, {Component} from 'react';

/** Fills Header section with data from resumeData */
export default class Header extends Component {
  /** Render Header section
   * @param {Object} resumeData - Data from resumeData.js
   * @return {JSX} Header section
  */
  render() {
    const resumeData = this.props.resumeData;
    return (
      <React.Fragment>

        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">Home</a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">About</a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">Resume</a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">Works</a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                Hey, I&aposm {resumeData.name}.
              </h1>
              <h2 style={{color: '#fff', fontFamily: 'sans-serif '}}>
                I&aposm a {resumeData.role}
              </h2>
              <h3 style={{color: '#fff', fontFamily: 'sans-serif '}}>
                {resumeData.roleDescription}
              </h3>
              <hr/>
              <ul className="social">
                {
                  resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) =>{
                    return (
                      <li key={item.name}>
                        {/* eslint-disable-next-line */}
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <i className={item.className}></i>
                        </a>
                      </li>
                    );
                  },
                  )
                }
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>

        </header>
      </React.Fragment>
    );
  }
}
