import React, {Component} from 'react';
import {ImageOverlay} from 'react-image-overlay-effect';

/** Fills Portfolio section with data from resumeData */
class Portfolio extends Component {
  /** Render Portfolio section
   * @param {Object} resumeData - Data from resumeData.js
   * @return {JSX} Portfolio section
  */
  render() {
    let projects;
    if (this.props.resumeData) {
      projects = this.props.resumeData.portfolio.map(function(projects) {
        const projectImage =projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div >
            <ImageOverlay
              src={projectImage}
              description={
                <div>
                  <a href={projects.url}>
                    {/* eslint-disable-next-line */}
                    <h5 style={{color: 'white', textAlign: 'center', margin: '20px'}}>{projects.title}</h5>
                  </a>
                  {/* eslint-disable-next-line */}
                  <p style={{color: 'white', textAlign: 'center', margin: '20px'}}>{projects.category}</p>
                </div>
              }
            />
          </div>
        </div>;
      });
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
