import React, { Component } from 'react';
export default  class Papers extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="papers">

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
                          <a href={item.doi} target="_blank">
                            <h3>{item.title}</h3>
                          </a>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
      </section>
    );
  }
}