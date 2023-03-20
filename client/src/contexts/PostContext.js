// import { createContext, useState } from "react";

// const PostContext = createContext();

// const PostProvider = (props) => {
//   const [posts, setPosts] = useState([]);
//   const [noResults, setNoResults] = useState(false);
//   const items = [
//     { name: "House & DIY", icon: "home" },
//     { name: "Animals", icon: "pets" },
//     { name: "Electronics", icon: "phonelink" },
//     { name: "Sports & Hobbies", icon: "accessibility_new" },
//     { name: "Clothes & Lifestyle", icon: "face" },
//     { name: "Farming", icon: "spa" },
//     { name: "Baby & Kinds", icon: "child_care" },
//     { name: "Cars & Motor", icon: "drive_eta" },
//     { name: "Business", icon: "business" },
//     { name: "Holidays & Tickets", icon: "beach_access" },
//     { name: "Lost & Found", icon: "sentiment_dissatisfied" },
//     { name: "Music & Education", icon: "music_note" },
//     { name: "Other", icon: "more" },
//     { name: "Property", icon: "store" },
//     { name: "Work", icon: "work" },
//   ];

//   const value = { posts, setPosts, noResults, setNoResults, items };

//   return (
//     <PostContext.Provider value={value}>{props.children}</PostContext.Provider>
//   );
// };

// export { PostContext, PostProvider };

import {  useState } from "react";

export const PostContext = (props) => {
  const items = [
    { name: "House & DIY", categoryName: "houseanddiy", icon: "home" },
    { name: "Animals", categoryName: "animals", icon: "pets" },
    { name: "Electronics", categoryName: "electronics", icon: "phonelink" },
    {
      name: "Sports & Hobbies",
      categoryName: "sportsandhobbies",
      icon: "accessibility_new",
    },
    {
      name: "Clothes & Lifestyle",
      categoryName: "clothesandlifestyle",
      icon: "face",
    },
    { name: "Farming", categoryName: "farming", icon: "spa" },
    { name: "Baby & Kinds", categoryName: "babyandkinds", icon: "child_care" },
    { name: "Cars & Motor", categoryName: "carsandmotor", icon: "drive_eta" },
    { name: "Business", categoryName: "business", icon: "business" },
    {
      name: "Holidays & Tickets",
      categoryName: "holidaysandtickets",
      icon: "beach_access",
    },
    {
      name: "Lost & Found",
      categoryName: "lostandfound",
      icon: "sentiment_dissatisfied",
    },
    {
      name: "Music & Education",
      categoryName: "musicandeducation",
      icon: "music_note",
    },
    { name: "Other", categoryName: "other", icon: "more" },
    { name: "Property", categoryName: "property", icon: "store" },
    { name: "Work", categoryName: "work", icon: "work" },
  ];

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("");
  const [listView, setListView] = useState("list");
  const [currentTitle, setCurrentTitle] = useState("");
  const [counterPosts, setCounterPosts] = useState(0);

  const updatePosts = (newPosts) => {
    setPosts(newPosts);
  };

//   return 
const value = {
    posts,
    isLoading,
    sort,
    listView,
    currentTitle,
    counterPosts,
    items,
    setPosts: updatePosts,
    setIsLoading,
    setSort,
    setListView,
    setCurrentTitle,
    setCounterPosts,
  };

  return (
        <PostContext.Provider value={value}>
            {props.children}
        </PostContext.Provider>
      );

};

