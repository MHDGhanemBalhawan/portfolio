import React from "react";
import Image from "react-bootstrap/Image";
export default class RecentProjects extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Recent Projects</h3>
                <p className="subtitle-a">
                  Various projects done with the latest technology.
                </p>
                <div className="line-mf" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href="images/PureCSS3.png" data-lightbox="gallery-mf">
                  <div className="work-img">
                    <Image
                      src="images/PureCSS3.png"
                      alt="pure css3"
                      className="img-fluid"
                    />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Pure CSS3 Project.</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{" "}
                          <span className="w-date">05 May 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="img/work-2.jpg" data-lightbox="gallery-mf">
                  <div className="work-img">
                    <Image
                      src="images/bikeforrefugee.png"
                      alt="bike for refugee"
                      className="img-fluid"
                    />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Bootstrap4 Project.</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{" "}
                          <span className="w-date">20 Jun. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="img/work-3.jpg" data-lightbox="gallery-mf">
                  <div className="work-img">
                    <Image
                      src="images/bikeforrefugee.png"
                      alt="bike for refugee"
                      className="img-fluid"
                    />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Mavrito Lana Dere</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{" "}
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="img/work-4.jpg" data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src="img/work-4.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Bindo Laro Cado</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{" "}
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="img/work-5.jpg" data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src="img/work-5.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Studio Lena Mado</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{" "}
                          <span className="w-date">18 Sep. 2018</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href="img/work-6.jpg" data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src="img/work-6.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Studio Big Bang</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Web Design</span> /{" "}
                          <span className="w-date">18 Sep. 2017</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
