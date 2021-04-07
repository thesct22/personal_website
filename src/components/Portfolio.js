import React, { Component } from 'react';
import { ImageOverlay } from "react-image-overlay-effect";

class Portfolio extends Component {
  render() {

    if(this.props.resumeData){
      var projects = this.props.resumeData.portfolio.map(function(projects){
        var projectImage =projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div >
            <ImageOverlay
              src={projectImage}
              description={
                <div>
                  <a href={projects.url}>
                    <h5 style={{ color: "white", textAlign: "center", margin: "20px" }}>{projects.title}</h5>
                  </a>
                  <p style={{ color: "white", textAlign: "center", margin: "20px" }}>{projects.category}</p>
                </div>
              }
            />
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;