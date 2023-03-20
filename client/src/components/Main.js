import React, { useContext, useState, Fragment } from "react";
import { PostContext } from "../contexts/PostContext";

import { PostsFeatured } from "./PostsFeatured";
import { PostsList } from "./PostsList";
import { SearchForm } from "./SearchForm";
import { CategoriesList } from "./CategoriesList";
import { Intro } from "./Intro";
import homeBackground from "../images/banner.jpg";

export const Main = () => {
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const { items } = useContext(PostContext) ?? { items: [] };

  const showResults = (data) => {
    if (data.length > 0) {
      setPosts([...data]);
      setNoResults(false);
    } else {
      setPosts([]);
      setNoResults(true);
    }
  };

  const imageBackground = {
    backgroundImage: `url(${homeBackground})`,
  };

  return (
    <PostContext.Provider value={{ posts, items }}>
      <Fragment>
        <Intro
          title="Sell or buy in one place for free"
          subTitle="Sell ​​what you do not need or buy what you need in one place for free"
          image={imageBackground}
        >
          <SearchForm
            items={items}
            results={showResults || ""}
            location="Ireland"
          />

          <div className="section__body">
            <CategoriesList items={items} />
          </div>
        </Intro>

        <main className="main">
          {posts.length ? (
            <div className="section-results">
              <div className="container">
                <h3 className="mb-4 h3">{`Found ${posts?.length} ads`}</h3>

                {posts.map((item) => (
                  <PostsList key={item._id} {...item} />
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
          {noResults ? (
            <div className="section-results">
              <div className="container">
                <h3 className="mb-4 h3">No results found</h3>
              </div>
            </div>
          ) : (
            ""
          )}

          <PostsFeatured />
        </main>
      </Fragment>
    </PostContext.Provider>
  );
};









// import React, { useContext, useState, Fragment } from "react";
// import { PostContext } from "../contexts/PostContext";

// import { PostsFeatured } from "./PostsFeatured";
// import { PostsList } from "./PostsList";
// import { SearchForm } from "./SearchForm";
// import { CategoriesList } from "./CategoriesList";
// import { Intro } from "./Intro";
// import homeBackground from "../images/banner.jpg";

// export const Main = () => {
//   const [state, setState] = useState({
//     posts: [],
//     noResults: false,
//     loading: false,
//   });
//   const isMounted = false;
//   const { posts, items } = useContext(PostContext) ?? { items: [], posts: [] };

//   const showResults = (data) => {
//     if (isMounted) {
//       if (data.length > 0) {
//         setState({
//           posts: [...data],
//           noResults: false,
//           loading: false,
//         });
//       } else {
//         setState({
//           posts: [],
//           noResults: true,
//         });
//       }
//     }
//   };

//   const imageBackground = {
//     backgroundImage: `url(${homeBackground})`,
//   };

//   return (
//     <PostContext.Provider>
//       <Fragment>
//         <Intro
//           title="Sell or buy in one place for free"
//           subTitle="Sell ​​what you do not need or buy what you need in one place for free"
//           image={imageBackground}
//         >
//           <SearchForm
//             items={items}
//             results={showResults || ""}
//             location="Ireland"
//           />

//           <div className="section__body">
//             <CategoriesList items={items} />
//           </div>
//         </Intro>

//         <main className="main">
//           {state.posts.length ? (
//             <div className="section-results">
//               <div className="container">
//                 <h3 className="mb-4 h3">
//                   {state.posts.length ? `Found ${state.posts.length} ads` : ""}
//                 </h3>

//                 {state.posts
//                   ? state.posts.map((item) => (
//                       <PostsList key={item._id} {...item} />
//                     ))
//                   : ""}
//               </div>
//             </div>
//           ) : (
//             ""
//           )}
//           {state.noResults ? (
//             <div className="section-results">
//               <div className="container">
//                 <h3 className="mb-4 h3">{`Found ${state.posts.length} ads`}</h3>
//               </div>
//             </div>
//           ) : (
//             ""
//           )}

//           {/* <Post /> */}

//           <PostsFeatured />
//         </main>
//       </Fragment>
//     </PostContext.Provider>
//   );
// };
