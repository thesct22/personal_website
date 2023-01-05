import React, {Component} from 'react';

/** Fills Papers section with data from resumeData */
export default class Papers extends Component {
  /** Render Papers section
   * @param {Object} resumeData - Data from resumeData.js
   * @return {JSX} Papers section
  */
  render() {
    const resumeData = this.props.resumeData;
    return (
      <section id="papers">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Publications</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.papers && resumeData.papers.map((item)=>{
                return (
                  <div className="row item" key={item.title}>
                    <div className="twelve columns">
                      <a href={item.doi} target="_blank" rel="noreferrer">
                        <h3>{item.title}</h3>
                      </a>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
    );
  }
}
