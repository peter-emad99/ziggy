/* This file is generated by Ziggy. */
declare module 'ziggy-js' {
  interface RouteList {
    "posts.index": [],
    "postComments.show": [
        {
            "name": "post",
            "required": true
        },
        {
            "name": "comment",
            "required": true,
            "binding": "uuid"
        }
    ],
    "postComments.store": [
        {
            "name": "post",
            "required": true
        }
    ]
}
}
export {};
