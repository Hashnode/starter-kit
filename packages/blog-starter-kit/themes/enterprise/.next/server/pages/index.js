"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9228);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8434);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3433);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4422);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5018);
/* harmony import */ var private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6630);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__["default"]
    },
    userland: private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6630:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3690);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _starter_kit_components_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5914);
/* harmony import */ var _starter_kit_components_hero_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2958);
/* harmony import */ var _starter_kit_components_intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6930);
/* harmony import */ var _starter_kit_components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1238);
/* harmony import */ var _starter_kit_components_more_stories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1224);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(572);
/* harmony import */ var _starter_kit_components_navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2743);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([graphql_request__WEBPACK_IMPORTED_MODULE_1__]);
graphql_request__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









// import { CMS_NAME } from "../lib/constants";

const GQL_ENDPOINT = "https://gql.hashnode.com";
function Index({ allPosts }) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_starter_kit_components_layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: `Hashnode Blog Starter Kit`
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_starter_kit_components_container__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W, {
                    className: "flex flex-col items-stretch gap-10 px-5 pt-10 md:pt-20 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_starter_kit_components_intro__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_starter_kit_components_navbar__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                        heroPost && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_starter_kit_components_hero_post__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            title: heroPost.title,
                            coverImage: heroPost.coverImage.url,
                            date: heroPost.publishedAt,
                            author: {
                                name: heroPost.author.name,
                                profilePicture: heroPost.author.profilePicture
                            },
                            slug: heroPost.slug,
                            excerpt: heroPost.brief
                        }),
                        morePosts.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_starter_kit_components_more_stories__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            posts: morePosts
                        })
                    ]
                })
            ]
        })
    });
}
const getStaticProps = async ()=>{
    const data = await (0,graphql_request__WEBPACK_IMPORTED_MODULE_1__["default"])(GQL_ENDPOINT, _generated_graphql__WEBPACK_IMPORTED_MODULE_8__/* .PostsByPublicationDocument */ .yP, {
        first: 9,
        host: "engineering.hashnode.com"
    });
    const allPosts = data.publication.posts.edges.map((edge)=>edge.node);
    return {
        props: {
            allPosts
        },
        revalidate: 60
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7457);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6534);
/* harmony import */ var _cover_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2917);
/* harmony import */ var _date_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9843);





const HeroPost = ({ title, coverImage, date, excerpt, author, slug })=>{
    const postURL = `${ true ? "http://" : 0}${"localhost:3000"}/${slug}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "grid grid-cols-1 gap-5 p-5 md:grid-cols-2 md:p-10 rounded-xl bg-slate-50 hover:bg-primary-50 dark:bg-neutral-800 dark:hover:bg-neutral-900",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-span-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_cover_image__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    title: title,
                    src: coverImage,
                    slug: slug
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col col-span-1 gap-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-xl font-bold lg:text-3xl text-slate-800 dark:text-neutral-50",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            as: postURL,
                            href: postURL,
                            className: "leading-tight tracking-tight hover:underline hover:text-primary-600 dark:hover:text-primary-500",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-medium text-md md:mb-0 text-slate-600 dark:text-neutral-300",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            as: postURL,
                            href: postURL,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_date_formatter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                dateString: date
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        as: postURL,
                        href: postURL,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-lg leading-snug text-slate-600 dark:text-neutral-300",
                            children: excerpt
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        as: postURL,
                        href: postURL,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_avatar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            size: 8,
                            name: author.name,
                            picture: author.profilePicture
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroPost);


/***/ }),

/***/ 6930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7457);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const Intro = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "grid grid-cols-1 gap-10 md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-start col-span-1 gap-3",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "flex flex-row items-center gap-2 text-5xl font-bold text-slate-950 dark:text-neutral-100",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Blog"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-xl text-slate-500 dark:text-neutral-300",
                        children: "The headless blog starter kit by Hashnode. Built with Next.js, TailwindCSS and Hashnode GraphQL APIs."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-span-1",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-start gap-3 p-5 rounded-xl bg-slate-100 dark:bg-neutral-800",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "font-semibold text-slate-700 dark:text-neutral-300",
                            children: "Subscribe to our blog updates"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "relative w-full p-2 bg-white rounded-full dark:bg-neutral-950",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "email",
                                    placeholder: "john@doe.com",
                                    className: "w-full p-3 text-base rounded-full outline-none dark:bg-neutral-950 top-3 left-3 focus:outline-primary-600 dark:focus:outline-primary-500 focus:placeholder:text-slate-200 placeholder:text-slate-400"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "absolute px-3 py-2 text-white rounded-full bg-primary-600 dark:bg-primary-500 top-3 right-3",
                                    children: "Subscribe"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);


/***/ }),

/***/ 1224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ more_stories)
});

// EXTERNAL MODULE: ../../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(216);
// EXTERNAL MODULE: ../../../components/avatar.tsx
var avatar = __webpack_require__(6534);
// EXTERNAL MODULE: ../../../components/date-formatter.tsx
var date_formatter = __webpack_require__(9843);
// EXTERNAL MODULE: ../../../components/cover-image.tsx
var cover_image = __webpack_require__(2917);
// EXTERNAL MODULE: ../../../../node_modules/.pnpm/next@13.4.19_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js
var next_link = __webpack_require__(7457);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ../../../components/post-preview.tsx





const PostPreview = ({ title, coverImage, date, excerpt, author, slug })=>{
    const postURL = `${ true ? "http://" : 0}${"localhost:3000"}/${slug}`;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col items-stretch gap-3",
        children: [
            coverImage && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "",
                children: /*#__PURE__*/ jsx_runtime.jsx(cover_image/* default */.Z, {
                    slug: slug,
                    title: title,
                    src: coverImage
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                className: "text-xl font-bold lg:text-3xl text-slate-800 dark:text-neutral-50",
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    as: postURL,
                    href: postURL,
                    className: "leading-tight tracking-tight hover:underline hover:text-primary-600 dark:hover:text-primary-500",
                    children: title
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "font-medium text-md md:mb-0 text-slate-600 dark:text-neutral-300",
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    as: postURL,
                    href: postURL,
                    children: /*#__PURE__*/ jsx_runtime.jsx(date_formatter/* default */.Z, {
                        dateString: date
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                as: postURL,
                href: postURL,
                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "text-lg leading-snug text-slate-600 dark:text-neutral-300",
                    children: excerpt
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                as: postURL,
                href: postURL,
                children: /*#__PURE__*/ jsx_runtime.jsx(avatar/* default */.Z, {
                    name: author.name,
                    size: 8,
                    picture: author.profilePicture
                })
            })
        ]
    });
};
/* harmony default export */ const post_preview = (PostPreview);

;// CONCATENATED MODULE: ../../../components/more-stories.tsx


const MoreStories = ({ posts })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "flex flex-col items-start gap-10 mb-10",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h2", {
                className: "text-xl font-bold leading-tight tracking-tight lg:text-3xl",
                children: "More Stories"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-20 gap-y-10 md:gap-y-10",
                children: posts.map((post)=>/*#__PURE__*/ jsx_runtime.jsx(post_preview, {
                        title: post.title,
                        coverImage: post.coverImage?.url,
                        date: post.publishedAt,
                        author: {
                            name: post.author.name,
                            profilePicture: post.author.profilePicture
                        },
                        slug: post.slug,
                        excerpt: post.brief,
                        url: post.url
                    }, post.slug))
            })
        ]
    });
};
/* harmony default export */ const more_stories = (MoreStories);


/***/ }),

/***/ 2743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5621);


const Navbar = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid items-center grid-cols-1 gap-5 text-sm md:grid-cols-2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                className: "flex flex-row items-center justify-start col-span-1 gap-1 py-5 overflow-x-auto font-medium text-slate-500 dark:text-neutral-300",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "block px-4 py-2 rounded-xl hover:bg-slate-100 bg-slate-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-slate-900 dark:text-neutral-50",
                        href: "#home",
                        children: "Engineering"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "block px-4 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-neutral-600",
                        href: "#about",
                        children: "Design"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "block px-4 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-neutral-600",
                        href: "#services",
                        children: "Announcements"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "block px-4 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-neutral-600",
                        href: "#contact",
                        children: "APIs"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-row w-full col-span-1 gap-1 text-slate-600 dark:text-neutral-300",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "Search posts…",
                            className: "w-full px-4 py-2 border rounded-full outline-none border-slate-200 dark:bg-neutral-800 hover:bg-slate-100 dark:border-neutral-600 dark:hover:bg-neutral-950 dark:text-neutral-50"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        className: "flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-600 border-slate-200 hover:bg-slate-100",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_1__/* .XSVG */ .PS, {
                            className: "w-5 h-5 stroke-current"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        className: "flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-600 border-slate-200 hover:bg-slate-100",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_1__/* .GithubSVG */ .H_, {
                            className: "w-5 h-5 stroke-current"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        className: "flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-600 border-slate-200 hover:bg-slate-100",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_1__/* .LinkedinSVG */ .tl, {
                            className: "w-5 h-5 stroke-current"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        className: "flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-600 border-slate-200 hover:bg-slate-100",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_1__/* .HashnodeSVG */ .mW, {
                            className: "w-5 h-5 stroke-current"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        className: "flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-600 border-slate-200 hover:bg-slate-100",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_1__/* .RssSVG */ .G2, {
                            className: "w-5 h-5 stroke-current"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 3690:
/***/ ((module) => {

module.exports = import("graphql-request");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [958,199,750,114,688], () => (__webpack_exec__(6012)));
module.exports = __webpack_exports__;

})();