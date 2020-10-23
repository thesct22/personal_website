import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {

    var resumeData=this.props.resumeData;

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map(function(projects){
                  var projectImage =projects.imgurl;
                  return( 
                    <div key={projects.name} className="columns portfolio-item">
                    <div className="item-wrap">
                      <a href={projects.url}>
                        <div>
                          <img alt={projects.name} src={projectImage} />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{projects.name}</h5>
                              <p>{projects.description}</p>
                            </div>
                          </div>
                          <div className="link-icon">
                            <i className="fa fa-link"></i>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>)
                })
              }
            </div>
          </div>
      </div>
   </section>
    );
  }
}