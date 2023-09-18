"use strict";
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WY: () => (/* binding */ SinglePostByPublicationDocument),
/* harmony export */   gu: () => (/* binding */ SlugPostsByPublicationDocument),
/* harmony export */   yP: () => (/* binding */ PostsByPublicationDocument)
/* harmony export */ });
/* unused harmony exports AudioBlogVoiceType, BackupStatus, EmailImportStatus, FeedType, HttpRedirectionType, NewsletterFrequency, PostCommentSortBy, PostCommenterSortBy, PublicationLayout, PublicationNavigationType, Scope, SortOrder, TagPostsSort, UrlPattern, UserPublicationRole, PostFragmentDoc */
var AudioBlogVoiceType;
(function(AudioBlogVoiceType) {
    AudioBlogVoiceType[/** Enum for the female voice type of the audio blog. */ "Female"] = "FEMALE";
    AudioBlogVoiceType[/** Enum for the male voice type of the audio blog. */ "Male"] = "MALE";
})(AudioBlogVoiceType || (AudioBlogVoiceType = {}));
var BackupStatus;
(function(BackupStatus) {
    BackupStatus[/** The backup failed. */ "Failed"] = "failed";
    BackupStatus[/** The backup was successful. */ "Success"] = "success";
})(BackupStatus || (BackupStatus = {}));
var EmailImportStatus;
(function(EmailImportStatus) {
    EmailImportStatus[/** There was an error during the import. */ "Failed"] = "FAILED";
    EmailImportStatus[/** The import has been acknowledged by the user. */ "Finished"] = "FINISHED";
    EmailImportStatus[/** Import has been initialized but is not yet in progress. */ "Initialized"] = "INITIALIZED";
    EmailImportStatus[/** Import is in progress. */ "InProgress"] = "IN_PROGRESS";
    EmailImportStatus[/** Import has to be reviewed by Hashnode. It is not yet reviewed. */ "InReview"] = "IN_REVIEW";
    EmailImportStatus[/** The has been rejected. Nothing has been imported. */ "Rejected"] = "REJECTED";
    EmailImportStatus[/** Import was successful. New emails have been imported. */ "Success"] = "SUCCESS";
})(EmailImportStatus || (EmailImportStatus = {}));
var FeedType;
(function(FeedType) {
    FeedType[/** Returns posts which were bookmarked by the user, sorted based on recency. */ "Bookmarks"] = "BOOKMARKS";
    FeedType[/** Returns posts which were featured, sorted based on recency. */ "Featured"] = "FEATURED";
    FeedType[/**
   * Returns only posts of the users you follow or publications you have subscribed to.
   *
   * Note: You have to be authenticated to use this feed type.
   */ "Following"] = "FOLLOWING";
    FeedType[/**
   * Returns only posts based on users following and interactions.
   *
   * Personalised feed is curated per requesting user basis.
   */ "Personalized"] = "PERSONALIZED";
    FeedType[/** Returns posts which were published recently, sorted based on recency. */ "Recent"] = "RECENT";
    FeedType[/** Returns posts based on old personalization algorithm. */ "Relevant"] = "RELEVANT";
})(FeedType || (FeedType = {}));
var HttpRedirectionType;
(function(HttpRedirectionType) {
    HttpRedirectionType[/** A permanent redirect that corresponds to the 308 HTTP status code. */ "Permanent"] = "PERMANENT";
    HttpRedirectionType[/** A temporary redirect that corresponds to the 307 HTTP status code. */ "Temporary"] = "TEMPORARY";
})(HttpRedirectionType || (HttpRedirectionType = {}));
var NewsletterFrequency;
(function(NewsletterFrequency) {
    NewsletterFrequency["Asap"] = "asap";
    NewsletterFrequency["Weekly"] = "weekly";
})(NewsletterFrequency || (NewsletterFrequency = {}));
var PostCommentSortBy;
(function(PostCommentSortBy) {
    PostCommentSortBy[/** Sorts comments by recency. */ "Recent"] = "RECENT";
    PostCommentSortBy[/** Sorts comments by popularity. */ "Top"] = "TOP";
})(PostCommentSortBy || (PostCommentSortBy = {}));
var PostCommenterSortBy;
(function(PostCommenterSortBy) {
    PostCommenterSortBy[/** Sorts commenters by popularity. */ "Popular"] = "POPULAR";
    PostCommenterSortBy[/** Sorts commenters by recency. */ "Recent"] = "RECENT";
})(PostCommenterSortBy || (PostCommenterSortBy = {}));
var PublicationLayout;
(function(PublicationLayout) {
    PublicationLayout[/** Changes the layout of blog into grid 3 post cards per row. */ "Grid"] = "grid";
    PublicationLayout[/**
   * Changes the layout of blog into magazine style.
   * This is the newest layout.
   */ "Magazine"] = "magazine";
    PublicationLayout[/** Changes the layout of blog into stacked list of posts. */ "Stacked"] = "stacked";
})(PublicationLayout || (PublicationLayout = {}));
var PublicationNavigationType;
(function(PublicationNavigationType) {
    PublicationNavigationType[/** The navbar item is a link. */ "Link"] = "link";
    PublicationNavigationType[/** The navbar item is a static page. */ "Page"] = "page";
    PublicationNavigationType[/** The navbar item is a series. */ "Series"] = "series";
})(PublicationNavigationType || (PublicationNavigationType = {}));
var Scope;
(function(Scope) {
    Scope["AcknowledgeEmailImport"] = "acknowledge_email_import";
    Scope["ActiveProUser"] = "active_pro_user";
    Scope["AssignProPublications"] = "assign_pro_publications";
    Scope["ChangeProSubscription"] = "change_pro_subscription";
    Scope["CreatePro"] = "create_pro";
    Scope["ImportSubscribersToPublication"] = "import_subscribers_to_publication";
    Scope["PublishPost"] = "publish_post";
    Scope["Signup"] = "signup";
    Scope["WritePost"] = "write_post";
    Scope["WriteSeries"] = "write_series";
})(Scope || (Scope = {}));
var SortOrder;
(function(SortOrder) {
    SortOrder["Asc"] = "asc";
    SortOrder["Dsc"] = "dsc";
})(SortOrder || (SortOrder = {}));
var TagPostsSort;
(function(TagPostsSort) {
    TagPostsSort[/** Sorts by popularity, used in Hot tag feed. */ "Popular"] = "popular";
    TagPostsSort[/** Determinate how to sort the results. Defaults to recents, used in New tag feed. */ "Recent"] = "recent";
    TagPostsSort[/** Trending is particular used to fetch top posts trending within a week time under a tag */ "Trending"] = "trending";
})(TagPostsSort || (TagPostsSort = {}));
var UrlPattern;
(function(UrlPattern) {
    UrlPattern[/** Post URLs contain the slug (for example `my slug`) and a random id (like `1234`) , e.g. "/my-slug-1234". */ "Default"] = "DEFAULT";
    UrlPattern[/** Post URLs only contain the slug, e.g. "/my-slug". */ "Simple"] = "SIMPLE";
})(UrlPattern || (UrlPattern = {}));
var UserPublicationRole;
(function(UserPublicationRole) {
    UserPublicationRole[/** Contributors can join the publication and contribute an article. They cannot directly publish a new article. */ "Contributor"] = "CONTRIBUTOR";
    UserPublicationRole[/**
   * The editor has access to the publication dashboard to customize the blog and approve/reject posts.
   * They also have access to the member panel to add/modify/remove members. Editors cannot remove other editors or update their roles.
   */ "Editor"] = "EDITOR";
    UserPublicationRole[/** The owner is the creator of the publication and can do all things, including delete publication. */ "Owner"] = "OWNER";
})(UserPublicationRole || (UserPublicationRole = {}));
const PostFragmentDoc = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "Post"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Post"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "id"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "title"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "url"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "content"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "markdown"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "author"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "profilePicture"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "coverImage"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "url"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "publishedAt"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "slug"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "brief"
                        }
                    }
                ]
            }
        }
    ]
};
const PostsByPublicationDocument = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "OperationDefinition",
            "operation": "query",
            "name": {
                "kind": "Name",
                "value": "PostsByPublication"
            },
            "variableDefinitions": [
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "host"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                },
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "first"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int"
                            }
                        }
                    }
                },
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "after"
                        }
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    }
                }
            ],
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "publication"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "host"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "host"
                                    }
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "posts"
                                    },
                                    "arguments": [
                                        {
                                            "kind": "Argument",
                                            "name": {
                                                "kind": "Name",
                                                "value": "first"
                                            },
                                            "value": {
                                                "kind": "Variable",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "first"
                                                }
                                            }
                                        },
                                        {
                                            "kind": "Argument",
                                            "name": {
                                                "kind": "Name",
                                                "value": "after"
                                            },
                                            "value": {
                                                "kind": "Variable",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "after"
                                                }
                                            }
                                        }
                                    ],
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "edges"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "node"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "FragmentSpread",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "Post"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            "kind": "FragmentDefinition",
            "name": {
                "kind": "Name",
                "value": "Post"
            },
            "typeCondition": {
                "kind": "NamedType",
                "name": {
                    "kind": "Name",
                    "value": "Post"
                }
            },
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "id"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "title"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "url"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "content"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "markdown"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "author"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "name"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "profilePicture"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "coverImage"
                        },
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "url"
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "publishedAt"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "slug"
                        }
                    },
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "brief"
                        }
                    }
                ]
            }
        }
    ]
};
const SinglePostByPublicationDocument = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "OperationDefinition",
            "operation": "query",
            "name": {
                "kind": "Name",
                "value": "SinglePostByPublication"
            },
            "variableDefinitions": [
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "slug"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                },
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "host"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                }
            ],
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "publication"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "host"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "host"
                                    }
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "post"
                                    },
                                    "arguments": [
                                        {
                                            "kind": "Argument",
                                            "name": {
                                                "kind": "Name",
                                                "value": "slug"
                                            },
                                            "value": {
                                                "kind": "Variable",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "slug"
                                                }
                                            }
                                        }
                                    ],
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "slug"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "url"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "brief"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "title"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "publishedAt"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "coverImage"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "url"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "author"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "name"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "profilePicture"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "id"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "title"
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "content"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "markdown"
                                                            }
                                                        },
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "html"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "ogMetaData"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "image"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};
const SlugPostsByPublicationDocument = {
    "kind": "Document",
    "definitions": [
        {
            "kind": "OperationDefinition",
            "operation": "query",
            "name": {
                "kind": "Name",
                "value": "SlugPostsByPublication"
            },
            "variableDefinitions": [
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "host"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "String"
                            }
                        }
                    }
                },
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "first"
                        }
                    },
                    "type": {
                        "kind": "NonNullType",
                        "type": {
                            "kind": "NamedType",
                            "name": {
                                "kind": "Name",
                                "value": "Int"
                            }
                        }
                    }
                },
                {
                    "kind": "VariableDefinition",
                    "variable": {
                        "kind": "Variable",
                        "name": {
                            "kind": "Name",
                            "value": "after"
                        }
                    },
                    "type": {
                        "kind": "NamedType",
                        "name": {
                            "kind": "Name",
                            "value": "String"
                        }
                    }
                }
            ],
            "selectionSet": {
                "kind": "SelectionSet",
                "selections": [
                    {
                        "kind": "Field",
                        "name": {
                            "kind": "Name",
                            "value": "publication"
                        },
                        "arguments": [
                            {
                                "kind": "Argument",
                                "name": {
                                    "kind": "Name",
                                    "value": "host"
                                },
                                "value": {
                                    "kind": "Variable",
                                    "name": {
                                        "kind": "Name",
                                        "value": "host"
                                    }
                                }
                            }
                        ],
                        "selectionSet": {
                            "kind": "SelectionSet",
                            "selections": [
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "id"
                                    }
                                },
                                {
                                    "kind": "Field",
                                    "name": {
                                        "kind": "Name",
                                        "value": "posts"
                                    },
                                    "arguments": [
                                        {
                                            "kind": "Argument",
                                            "name": {
                                                "kind": "Name",
                                                "value": "first"
                                            },
                                            "value": {
                                                "kind": "Variable",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "first"
                                                }
                                            }
                                        },
                                        {
                                            "kind": "Argument",
                                            "name": {
                                                "kind": "Name",
                                                "value": "after"
                                            },
                                            "value": {
                                                "kind": "Variable",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "after"
                                                }
                                            }
                                        }
                                    ],
                                    "selectionSet": {
                                        "kind": "SelectionSet",
                                        "selections": [
                                            {
                                                "kind": "Field",
                                                "name": {
                                                    "kind": "Name",
                                                    "value": "edges"
                                                },
                                                "selectionSet": {
                                                    "kind": "SelectionSet",
                                                    "selections": [
                                                        {
                                                            "kind": "Field",
                                                            "name": {
                                                                "kind": "Name",
                                                                "value": "node"
                                                            },
                                                            "selectionSet": {
                                                                "kind": "SelectionSet",
                                                                "selections": [
                                                                    {
                                                                        "kind": "Field",
                                                                        "name": {
                                                                            "kind": "Name",
                                                                            "value": "slug"
                                                                        }
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
};


/***/ }),

/***/ 6534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);

const Avatar = ({ name, picture, size })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: picture,
                className: size ? `w-${size} h-${size} rounded-full` : "w-8 h-8 rounded-full",
                alt: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-base font-bold text-slate-600 dark:text-neutral-300",
                children: name
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Avatar);


/***/ }),

/***/ 5914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ Container),
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);

const Container = ({ children, className })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto " + className,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 2917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7457);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(565);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);




const CoverImage = ({ title, src, slug })=>{
    const postURL = `${ true ? "http://" : 0}${"localhost:3000"}/${slug}`;
    const image = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative pt-[56.25%]",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
            src: src,
            alt: `Cover Image for ${title}`,
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("border dark:border-neutral-600 rounded-xl w-full", {
                "hover:border-slate-400 duration-200": slug
            }),
            fill: true,
            objectFit: "cover"
        })
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sm:mx-0",
        children: slug ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            as: postURL,
            href: postURL,
            "aria-label": title,
            children: image
        }) : image
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoverImage);


/***/ }),

/***/ 9843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5094);
/* harmony import */ var date_fns_parseISO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9611);



const DateFormatter = ({ dateString })=>{
    if (!dateString) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    const date = (0,date_fns_parseISO__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(dateString);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
        dateTime: dateString,
        children: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(date, "LLLL d, yyyy")
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateFormatter);


/***/ }),

/***/ 5621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H_: () => (/* reexport */ GithubSVG),
  mW: () => (/* reexport */ HashnodeSVG),
  tl: () => (/* reexport */ LinkedinSVG),
  CG: () => (/* reexport */ NewsletterPlusSVG),
  G2: () => (/* reexport */ RssSVG),
  PS: () => (/* reexport */ XSVG)
});

// UNUSED EXPORTS: ExternalArrowSVG, PlusCircleSVG

// EXTERNAL MODULE: ../../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(216);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ../../../components/icons/svgs/RssSVG.js


class RssSVG extends (external_react_default()).Component {
    render() {
        return /*#__PURE__*/ jsx_runtime.jsx("svg", {
            className: this.props.className,
            fill: "none",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M4 4a16 16 0 0 1 16 16M4 11a9 9 0 0 1 9 9m-9-1a1 1 0 1 1 2 0m-2 0a1 1 0 1 0 2 0m-2 0h2"
            })
        });
    }
}

;// CONCATENATED MODULE: ../../../components/icons/svgs/XSVG.js


class XSVG extends (external_react_default()).Component {
    render() {
        return /*#__PURE__*/ jsx_runtime.jsx("svg", {
            className: this.props.className,
            fill: "none",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeWidth: "1.5",
                d: "M10.643 13.346 4.269 4.869a.827.827 0 0 1 .661-1.325l2.288.001c.258 0 .501.12.658.326l5.03 6.596m-2.263 2.879-5.45 7.163m5.45-7.163 5.16 6.731a.827.827 0 0 0 .654.324l2.335.007a.827.827 0 0 0 .662-1.328l-6.548-8.612m0 0 5.312-6.959"
            })
        });
    }
}

;// CONCATENATED MODULE: ../../../components/icons/svgs/GithubSVG.js


class GithubSVG extends (external_react_default()).Component {
    render() {
        return /*#__PURE__*/ jsx_runtime.jsx("svg", {
            className: this.props.className,
            fill: "none",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M9.49 18.991c-4.32 1.406-4.32-2.51-6.027-3.013M15.515 21v-3.515c0-1.005.1-1.406-.502-2.009 2.812-.301 5.524-1.406 5.524-6.026a4.62 4.62 0 0 0-1.306-3.214 4.218 4.218 0 0 0-.1-3.214s-1.105-.3-3.515 1.306a12.353 12.353 0 0 0-6.227 0c-2.41-1.607-3.515-1.306-3.515-1.306a4.218 4.218 0 0 0-.1 3.214A4.62 4.62 0 0 0 4.467 9.45c0 4.62 2.711 5.725 5.524 6.026-.603.603-.603 1.205-.503 2.009V21"
            })
        });
    }
}

;// CONCATENATED MODULE: ../../../components/icons/svgs/LinkedinSVG.js


class LinkedinSVG extends (external_react_default()).Component {
    render() {
        return /*#__PURE__*/ jsx_runtime.jsx("svg", {
            className: this.props.className,
            fill: "none",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M16 16v-3a2 2 0 1 0-4 0v3-5m-4 5v-5m.4-3.1a.4.4 0 0 1-.8 0m.8 0a.4.4 0 0 0-.8 0m.8 0h-.8M6 21h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3Z"
            })
        });
    }
}

;// CONCATENATED MODULE: ../../../components/icons/svgs/HashnodeSVG.js


class HashnodeSVG extends (external_react_default()).Component {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            className: this.props.className,
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("path", {
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    d: "M7.314 4.97c1.64-1.64 2.461-2.46 3.407-2.767a4.143 4.143 0 0 1 2.56 0c.946.307 1.766 1.127 3.407 2.768l2.341 2.341c1.64 1.64 2.46 2.46 2.768 3.407.27.832.27 1.728 0 2.56-.307.946-1.127 1.766-2.768 3.407l-2.343 2.343c-1.64 1.64-2.461 2.46-3.407 2.768-.832.27-1.728.27-2.56 0-.946-.307-1.766-1.127-3.407-2.768l-2.341-2.341c-1.64-1.64-2.46-2.46-2.768-3.407a4.143 4.143 0 0 1 0-2.56C2.51 9.775 3.33 8.955 4.97 7.314l2.343-2.343Z"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("path", {
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    d: "M15.107 12a3.107 3.107 0 1 1-6.214 0 3.107 3.107 0 0 1 6.214 0Z"
                })
            ]
        });
    }
}

;// CONCATENATED MODULE: ../../../components/icons/svgs/PlusCircleSVG.js


class PlusCircleSVG extends (external_react_default()).Component {
    render() {
        return /*#__PURE__*/ jsx_runtime.jsx("svg", {
            className: this.props.className,
            fill: "none",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M8 12h4m0 0h4m-4 0V8m0 4v4m10-4c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
            })
        });
    }
}

;// CONCATENATED MODULE: ../../../components/icons/svgs/NewsletterPlusSVG.js


class NewsletterPlusSVG extends (external_react_default()).Component {
    render() {
        return /*#__PURE__*/ jsx_runtime.jsx("svg", {
            className: this.props.className,
            fill: "none",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                fill: "currentColor",
                d: "M13.137 7.1a.75.75 0 1 0 0-1.5v1.5Zm6.765 5.58a.75.75 0 0 0-1.5 0h1.5Zm-17.4-3.13a.75.75 0 1 0-.69 1.332l.69-1.332Zm14.092 2.155a.75.75 0 0 0-.833-1.248l.833 1.248Zm-.312-6.095a.75.75 0 0 0 0 1.5v-1.5ZM22 7.109a.75.75 0 0 0 0-1.5v1.5Zm-3.609 2.108a.75.75 0 1 0 1.5 0h-1.5Zm1.5-5.717a.75.75 0 0 0-1.5 0h1.5ZM8.277 13.377l-.344.666.344-.666Zm1.85.785.118-.74-.117.74Zm3.02-1.058-.417-.624.416.624Zm-1.752.987-.2-.723.2.723Zm7.007 3.695c0 .638-.517 1.155-1.155 1.155v1.5a2.656 2.656 0 0 0 2.655-2.655h-1.5Zm-1.155 1.155H3.906v1.5h13.34v-1.5Zm-13.341 0a1.156 1.156 0 0 1-1.156-1.155h-1.5a2.656 2.656 0 0 0 2.656 2.655v-1.5ZM2.75 17.786v-9.53h-1.5v9.53h1.5Zm0-9.53c0-.638.517-1.155 1.156-1.155V5.6A2.656 2.656 0 0 0 1.25 8.256h1.5Zm1.156-1.155h9.23V5.6h-9.23v1.5Zm15.996 10.685V12.68h-1.5v5.106h1.5ZM1.812 10.88l6.12 3.162.69-1.332-6.12-3.162-.69 1.332Zm11.75 2.847 3.032-2.024-.833-1.248-3.031 2.024.833 1.248Zm2.72-6.62h2.86v-1.5h-2.86v1.5Zm2.86 0H22v-1.5h-2.859v1.5Zm.75 2.11v-2.86h-1.5v2.86h1.5Zm0-2.86V3.5h-1.5v2.859h1.5Zm-11.96 7.685c.87.45 1.453.76 2.078.86l.235-1.482c-.33-.052-.662-.214-1.624-.71l-.688 1.332Zm4.798-1.563c-.9.601-1.213.8-1.535.888l.4 1.446c.61-.168 1.154-.543 1.968-1.086l-.833-1.248Zm-2.72 2.423a3.75 3.75 0 0 0 1.584-.09l-.399-1.445a2.257 2.257 0 0 1-.95.053l-.235 1.482Z"
            })
        });
    }
}

;// CONCATENATED MODULE: ../../../components/icons/svgs/ExternalArrowSVG.js


class ExternalArrowSVG extends (external_react_default()).Component {
    render() {
        return /*#__PURE__*/ jsx_runtime.jsx("svg", {
            className: this.props.className,
            fill: "none",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M21 12v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6m4 0h5m0 0v5m0-5-8 8"
            })
        });
    }
}

;// CONCATENATED MODULE: ../../../components/icons/svgs/index.js










;// CONCATENATED MODULE: ../../../components/icons/index.js



/***/ }),

/***/ 1238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layout)
});

// EXTERNAL MODULE: ../../../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(216);
// EXTERNAL MODULE: ../../../components/container.tsx
var container = __webpack_require__(5914);
// EXTERNAL MODULE: ../../../components/icons/index.js + 9 modules
var icons = __webpack_require__(5621);
;// CONCATENATED MODULE: ../../../components/footer.tsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "px-5 py-20 border-t bg-slate-100 dark:bg-neutral-900 dark:border-neutral-800",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(container/* default */.Z, {
            className: "grid grid-cols-1 gap-10 md:grid-cols-2",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-col items-start col-span-1 gap-10 text-slate-500 dark:text-neutral-300",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                            className: "text-lg md:text-xl",
                            children: "The headless blog starter kit by Hashnode. Built with Next.js, TailwindCSS and Hashnode GraphQL APIs."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex flex-row items-center gap-2 p-5 text-slate-600 bg-slate-200 rounded-xl",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "",
                                    children: "Blog powered by"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    href: "#",
                                    className: "flex flex-row items-center gap-1 font-semibold hover:underline",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(icons/* HashnodeSVG */.mW, {
                                            className: "w-5 h-5 stroke-current"
                                        }),
                                        "Hashnode"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-row items-center justify-start col-span-1 gap-2 md:justify-end text-slate-600 dark:text-neutral-300",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            className: "hover:underline",
                            href: "#",
                            children: "Privacy"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                            className: "hover:underline",
                            href: "#",
                            children: "Terms"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: "\xa9 Company 2023"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ../../../components/meta.tsx


// import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'
const Meta = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-touch-icon.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "manifest",
                href: "/favicon/site.webmanifest"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "mask-icon",
                href: "/favicon/safari-pinned-tab.svg",
                color: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "shortcut icon",
                href: "/favicon/favicon.ico"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#000000"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "msapplication-config",
                content: "/favicon/browserconfig.xml"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "theme-color",
                content: "#000"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("link", {
                rel: "alternate",
                type: "application/rss+xml",
                href: "/feed.xml"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("meta", {
                name: "description",
                content: `A statically generated blog example using Next.js and Hashnode.`
            })
        ]
    });
};
/* harmony default export */ const meta = (Meta);

;// CONCATENATED MODULE: ../../../components/layout.tsx



const Layout = ({ preview, children })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(meta, {}),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "min-h-screen bg-white dark:bg-neutral-950",
                children: /*#__PURE__*/ jsx_runtime.jsx("main", {
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(footer, {})
        ]
    });
};
/* harmony default export */ const layout = (Layout);


/***/ })

};
;