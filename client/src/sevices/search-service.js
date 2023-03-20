import { post, get } from '../rest/rest';
const API_SERVER = `${process.env.REACT_APP_API_SERVER}`;

export const SearchService = {
    baseUrl: API_SERVER + '/feed/posts',
    searchUrl: API_SERVER + '/feed/post/find',
    findPosts:  (obj) => {
        return post(SearchService.searchUrl, obj);
    },
    getPosts: () => {
        return get(SearchService.baseUrl);
    }
};
