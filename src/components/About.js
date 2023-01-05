import React, {Component} from 'react';
import pdf from '../sharathct.pdf';

/** Fills About section with data from resumeData */
export default class About extends Component {
  /** Render About section
   * @param {Object} resumeData - Data from resumeData.js
   * @return {JSX} About section
  */
  render() {
    const resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">

          <div className="three columns">
            <div className="row">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="row">
              <br/>
              <br/>
              <div className="four columns">
                <a href={pdf} target="_blank" rel="noopener noreferrer">
                  <h3 style={{color: '#fff', fontFamily: 'sans-serif '}}>
                    Resume
                  </h3>
                  <i className="fas fa-file-pdf fa-5x"/>
                </a>
              </div>
            </div>
          </div>

          <div className="nine columns main-col">

            <h2>About Me</h2>
            <p>
              {
                resumeData.aboutme
              }
            </p>

            <div className="row">

              <div className="columns contact-details">

                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>
                    {resumeData.address}
                  </span>
                  <br></br>
                  <span>{resumeData.website}</span>
                  <br></br>
                  <span>{resumeData.phone}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
