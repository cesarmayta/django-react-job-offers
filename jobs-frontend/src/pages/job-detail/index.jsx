export const JobDetail = () => {
  return (
    <>
      <div className="sub-banner bg-color-full">
        <div className="container">
          <div className="breadcrumb-area">
            <h1>Job Detail</h1>
            <ul className="breadcrumbs">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Job Detail</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="job-details-page content-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="job-box-2">
                <div className="company-logo">
                  <img src="https://picsum.photos/80/80" alt="avatar" />
                </div>
                <div className="description">
                  <h5 className="title">
                    <a href="#">Development Marketer</a>
                  </h5>
                  <div className="candidate-listing-footer">
                    <ul>
                      <li>
                        <i className="flaticon-work"></i>UX Designer
                      </li>
                      <li>
                        <i className="flaticon-pin"></i> New York City
                      </li>
                      <li>
                        <i className="flaticon-time"></i> Full Time
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="hr-boder" />
              <div className="job-description mb-40">
                <h3 className="heading-2">Job Description</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar.
                  Donec a consectetur nulla. Nulla posuere sapien vitae lectus
                  suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat.
                  Curabitur convallis fringilla diam sed aliquam. Sed tempor
                  iaculis massa faucibus feugiat. In fermentum facilisis massa,
                  a consequat purus viverra a. Aliquam pellentesque nibh et nibh
                  feugiat gravida. Maecenas ultricies, diam vitae semper
                  placerat, velit risus accumsan nisl, eget tempor lacus est vel
                  nunc. Proin accumsan elit sed neque euismod fringilla.
                  Curabitur lobortis nunc velit, et fermentum urna dapibus non.
                  Vivamus magna lorem, elementum id gravida ac, laoreet
                  tristique augue. Maecenas dictum lacus eu nunc porttitor, ut
                  hendrerit arcu efficitur.
                </p>
              </div>
              <div className="education-experience amenities mb-40">
                <h3 className="heading-2">Education + Experience</h3>
                <ul>
                  <li>
                    <i className="fa fa-check"></i>M.B.S / M.B.A under National
                    University with CA course complete.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>3 or more years of professional
                    design experience
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Excellent communication skills,
                    most notably a demonstrated ability to solicit and address
                    creative and design feedback
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Masters of library science any
                    Green University.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>BA/BS degree in a technical field
                    or equivalent practical experience.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Ability to work independently and
                    to carry out assignments to completion within parameters of
                    instructions given, prescribed routines, and standard
                    accepted practices
                  </li>
                </ul>
              </div>
              <div className="responsibilities amenities mb-40">
                <h3 className="heading-2">Responsibilities</h3>
                <ul>
                  <li>
                    <i className="fa fa-check"></i>Explore and design dynamic and
                    compelling consumer experiences.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Have sound knowledge of
                    commercial activities.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>Build next-generation web
                    applications with a focus on the client side.
                  </li>
                  <li>
                    <i className="fa fa-check"></i>The applicants should have
                    experience in the following areas
                  </li>
                </ul>
              </div>
              <div className="location mb-50">
                <div className="map">
                  <h3 className="heading-2">Location</h3>
                  <div id="map" className="contact-map"></div>
                </div>
              </div>
              <div className="social-list-2 sl-3 float-left mb-40">
                <span>Share</span>
                <a href="#" className="facebook-bg">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="twitter-bg">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="google-bg">
                  <i className="fa fa-google"></i>
                </a>
                <a href="#" className="linkedin-bg">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="#" className="pinterest-bg">
                  <i className="fa fa-pinterest"></i>
                </a>
              </div>
              <div className="clearfix"></div>
              <div className="related-Jobs clearfix">
                <h3 className="heading-2">Related Jobs</h3>
                <div className="job-box">
                  <div className="company-logo">
                    <img src="https://picsum.photos/90/90" alt="logo" />
                  </div>
                  <div className="description">
                    <div className="float-left">
                      <h5 className="title">
                        <a href="job-details.html">
                          Dhaka Event Support Specialist
                        </a>
                      </h5>
                      <div className="candidate-listing-footer">
                        <ul>
                          <li>
                            <i className="flaticon-work"></i> Xero
                          </li>
                          <li>
                            <i className="flaticon-pin"></i> New York City
                          </li>
                          <li>
                            <i className="flaticon-time"></i> Temporary
                          </li>
                        </ul>
                        <h6>Deadline: Jan 31, 2019</h6>
                      </div>
                    </div>
                    <div className="div-right">
                      <a href="#" className="apply-button">
                        Apply Now
                      </a>
                      <a href="#">
                        <i className="flaticon-heart favourite"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="job-box">
                  <div className="company-logo">
                    <img src="https://picsum.photos/90/90" alt="logo" />
                  </div>
                  <div className="description">
                    <div className="float-left">
                      <h5 className="title">
                        <a href="job-details.html">Development Marketer</a>
                      </h5>
                      <div className="candidate-listing-footer">
                        <ul>
                          <li>
                            <i className="flaticon-work"></i> Red
                          </li>
                          <li>
                            <i className="flaticon-pin"></i> New York City
                          </li>
                          <li>
                            <i className="flaticon-time"></i> Part Time
                          </li>
                        </ul>
                        <h6>Deadline: Jan 31, 2019</h6>
                      </div>
                    </div>
                    <div className="div-right">
                      <a href="#" className="apply-button">
                        Apply Now
                      </a>
                      <a href="#">
                        <i className="flaticon-heart favourite"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="job-box mb-30">
                  <div className="company-logo">
                    <img src="https://picsum.photos/90/90" alt="logo" />
                  </div>
                  <div className="description">
                    <div className="float-left">
                      <h5 className="title">
                        <a href="job-details.html">
                          Green Development Marketer
                        </a>
                      </h5>
                      <div className="candidate-listing-footer">
                        <ul>
                          <li>
                            <i className="flaticon-work"></i> Zooms
                          </li>
                          <li>
                            <i className="flaticon-pin"></i> New York City
                          </li>
                          <li>
                            <i className="flaticon-time"></i> Full Time
                          </li>
                        </ul>
                        <h6>Deadline: Jan 31, 2019</h6>
                      </div>
                    </div>
                    <div className="div-right">
                      <a href="#" className="apply-button">
                        Apply Now
                      </a>
                      <a href="#">
                        <i className="flaticon-heart favourite"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="sidebar-right-2">
                <div className="widget search-box">
                  <form method="GET">
                    <div className="form-group fg-2">
                      <button className="search-button sj-btn btn-outline">
                        Save job
                      </button>
                    </div>
                    <div className="form-group mb-0">
                      <button className="search-button button-theme">
                        Apply Now
                      </button>
                    </div>
                  </form>
                </div>
                <div className="job-overview widget">
                  <h3 className="sidebar-title">Job Overview</h3>
                  <div className="s-border"></div>
                  <ul>
                    <li>
                      <i className="flaticon-money"></i>
                      <h5>Salary</h5>
                      <span>£12,000 - £25,000</span>
                    </li>
                    <li>
                      <i className="flaticon-pin"></i>
                      <h5>Location</h5>
                      <span>New York City</span>
                    </li>
                    <li>
                      <i className="flaticon-woman"></i>
                      <h5>Gender</h5>
                      <span>Any</span>
                    </li>
                    <li>
                      <i className="flaticon-work"></i>
                      <h5>Job Type</h5>
                      <span>Full Time</span>
                    </li>
                    <li>
                      <i className="flaticon-honor"></i>
                      <h5>Qualification</h5>
                      <span>Mba</span>
                    </li>
                    <li>
                      <i className="flaticon-notepad"></i>
                      <h5>Experience</h5>
                      <span>2 to 3 year</span>
                    </li>
                  </ul>
                </div>
                <div className="clearfix"></div>
                <div className="widget-5 contact-2 quick-contact">
                  <h3 className="sidebar-title">Quick Contacts</h3>
                  <div className="s-border"></div>
                  <form action="#" method="GET" encType="multipart/form-data">
                    <div className="form-group name">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group email">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group message">
                      <textarea
                        className="form-control"
                        name="message"
                        placeholder="Write message"
                      ></textarea>
                    </div>
                    <div className="send-btn">
                      <button type="submit" className="btn btn-md button-theme">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
