import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                If you're here after the session, here's the link to the ppt
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <a href={resumeData.ppt.url}>
                  {resumeData.ppt.title}
                </a>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}