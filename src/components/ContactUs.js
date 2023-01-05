import React, {Component} from 'react';

/** Fills ContactUs section with data from resumeData */
export default class ContactUs extends Component {
  /** Render ContactUs section
   * @param {Object} resumeData - Data from resumeData.js
   * @return {JSX} ContactUs section
  */
  render() {
    const resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              {/* eslint-disable-next-line */}
              If you&aposre here after the session, here&aposs the link to the ppt
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
