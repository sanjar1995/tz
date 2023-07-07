import{k as t}from"./index-1d4e5110.js";import{a as o}from"./axios-4a70c6fc.js";const r=t({id:"posts",state:()=>({url:"https://jsonplaceholder.typicode.com/",posts:null}),actions:{async getPosts(){const s=await o.get(`${this.url}posts`);this.posts=s.data}},getters:{},persist:!0});export{r as u};
//# sourceMappingURL=posts-a552a2af.js.map
