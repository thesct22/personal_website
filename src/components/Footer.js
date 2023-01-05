import React, {Component} from 'react';

/** Fills Footer section with data from resumeData */
export default class Footer extends Component {
  /** Render Footer section
   * @param {Object} resumeData - Data from resumeData.js
   * @return {JSX} Footer section
  */
  render() {
    const resumeData = this.props.resumeData;
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {
                resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                  return (
                    <li key={item.name}>
                      <a href={item.url}>
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })
              }
            </ul>

          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
