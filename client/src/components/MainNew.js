import React, { Fragment } from "react";
//import { PostContext } from "../contexts/PostContext";

import { PostsFeatured } from "./PostsFeatured";
//import { PostsList } from "./PostsList";
//import { SearchForm } from "./SearchForm";
import { CategoriesList } from "./CategoriesList";
import { Intro } from "./Intro";
import homeBackground from "../images/banner.jpg";

export const MainNew = () => {
//   const [posts, setPosts] = useState([]);
//   const [noResults, setNoResults] = useState(false);
//   const { items } = useContext(PostContext) ?? { items: [] };

//   const showResults = (data) => {
//     if (data.length > 0) {
//       setPosts([...data]);
//       setNoResults(false);
//     } else {
//       setPosts([]);
//       setNoResults(true);
//     }
//   };

  // const imageBackground = {
  //   backgroundImage: `url(${homeBackground})`,
  // };

  return (
    //<PostContext.Provider value={{ posts, items }}>
      <Fragment>
        {/* <Intro
          title="Sell or buy in one place for free"
          subTitle="Sell ​​what you do not need or buy what you need in one place for free"
          image={imageBackground}
        >
          {/* <SearchForm
            // items={items}
            // results={showResults || ""}
            // location="Ireland"
          /> */}

          {/* <div className="section__body">
            {<CategoriesList /* items={items} />*/}
          {/*</div>*/}
       {/* </Intro> */} 

        <main className="main">
            <div className="section-results">
              <div className="container">
                <h3 className="mb-4 h3">Post</h3>
              </div>
            </div>
            <div className="section-results">
              <div className="container">
                <h3 className="mb-4 h3">No results found</h3>
              </div>
            </div>

          {/* <PostsFeatured /> */}
        </main>
      </Fragment>
    //</PostContext.Provider>
  );
};
