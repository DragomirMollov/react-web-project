import React, { Fragment } from "react";

import { PostsFeatured } from "./PostsFeatured";
import { PostsList } from "./PostsList";
import { SearchForm } from "./SearchForm";
import { CategoriesList } from "./CategoriesList";
import { Intro } from "./Intro";
import homeBackground from "../images/banner.jpg";

export const Main = () => {

  const imageBackground = {
    backgroundImage: `url(${homeBackground})`,
  };

  return (
      <Fragment>
        <Intro
          title="Sell or buy in one place for free"
          subTitle="Sell ​​what you do not need or buy what you need in one place for free"
          image={imageBackground}
        >
          <SearchForm />

          <div className="section__body">
            <CategoriesList />
          </div>
        </Intro>

        <main className="main">
            <div className="section-results">
              <div className="container">
                <h3 className="mb-4 h3">No results found</h3>
              </div>
            </div>

          <PostsFeatured />
        </main>
      </Fragment>
  );
};