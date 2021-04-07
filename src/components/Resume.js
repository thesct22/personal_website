import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
              <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item)=>{
                return(
                  <div className="row item" key={item.UniversityName}>
                      <div className="twelve columns">
                        <h3>{item.UniversityName}</h3>
                        <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                        <p>
                        {item.Achievements}
                        </p>
                      </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
              <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return(
                  <div className="row item" key={item.CompanyName}>
                      <div className="twelve columns">
                        <h3>{item.CompanyName}</h3>
                        <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                        <p>
                        {item.Achievements}
                        </p>
                      </div>

                  </div>

                )
              })
            }
          </div> 
        </div>

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Publications</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.papers && resumeData.papers.map((item)=>{
                return(
                  <div className="row item" key={item.title}>
                    <div className="twelve columns">
                        <a href={item.doi} target="_blank" rel="noopener noreferrer">
                          <h3>{item.title}</h3>
                        </a>
                        <p>
                            {item.cite}
                        </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
              <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <h4>
              {resumeData.skillsDescription}
            </h4>

            <div>

              <ul className="skills">
                  {
                    resumeData.skills && resumeData.skills.map((item) => {
                      return(
                        <div key={item.skillname}>
                          <li>
                          <em>{item.skillname}</em>
                          </li>
                        </div>
                      )
                    })
                  }

              </ul>

            </div>
            

   			  </div>

           <div className="nine columns main-col">

            <h4>
              {resumeData.languagesDescription}
            </h4>

            <div>

              <ul className="skills">
                  {
                    resumeData.languages && resumeData.languages.map((item) => {
                      return(
                        <div key={item.skillname}>
                          <li>
                          <em>{item.skillname}</em>
                          </li>
                        </div>
                      )
                    })
                  }

              </ul>

            </div>
            

   			  </div>

        </div>

      </section>
    );
  }
}