import React from "react";

export default class RecentProjects extends React.Component {
  render() {
    return (
      <section id="recent-projects">
        <div className="recent-projects">
          <div className="container-sm">
            <h2>Recent Projects</h2>
          </div>
          <div className="recent-projects-list-bg" />
          <li className="project-ecommerce">
            <div className="project-visible-content">
              <div className="container-sm">
                <h3>eCommerce Website</h3>
                <div className="project-text-warpper">
                  <blockquote>
                    <p>
                      eCommerce Website with Admin Panel: This project could be
                      connected to PayPal in order to receive payments from
                      customers and could be tailored to sell digital items.
                      Customers could use the search box for a specific items.
                      Also, customers could see items by selecting the products
                      page, a brand name or a category from the left menu. Admin
                      panel contains adding, editing and deleting: items,
                      categories, brands. Furthermore, the left menu is dynamic
                      when a new category is added it would be reflected in the
                      menu.
                    </p>
                  </blockquote>
                </div>
                <a
                  href="#"
                  className="button project-extra-toggle"
                  onClick="toggleVisibilityCommerce(); return false;"
                >
                  More
                </a>
                <a
                  href="http://ecommercelogin.mhdghanembalhawan.com/"
                  className="button visit"
                  target="_blank"
                >
                  Visit
                </a>
              </div>
            </div>
            <div className="project-extra" id="project-extra">
              <ul className="project-extra-images clear-fix">
                <li>
                  <a
                    className="example-image-link"
                    href="images/ecomnew_pro.png"
                    data-lightbox="example-set"
                    data-title="Click the right half of the image to move forward."
                  >
                    <img src="images/ecomnew_pro.png" alt="ecomnew_pro" />
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </div>
      </section>
    );
  }
}
