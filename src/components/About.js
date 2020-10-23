import React, { Component } from 'react';
import pdf from '../sharathct.pdf'
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">
               <div className="row">
                  <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
               </div>
               <div className="row">
                  <br/>
                  <br/>
               <div className="four columns">
               <a href={pdf} target="_blank"><i className="fas fa-file-pdf fa-5x"/></a>
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
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}