export const users = {
  name: 'Fikri Handa',
  email: 'fikrihanda@gmail.com',
  role_name: 'frontend',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZGVtby5jb20iLCJ1c2VySWQiOjEsIm5hbWUiOiJEZW1vIFVzZXIiLCJyb2xlIjoiQWRtaW4iLCJpYXQiOjE1Njc2NTIyODMsImV4cCI6MTU2NzgyNTA4M30.RRyyg3-mFfkknnyFpovLR7M5SChm70-h0JnmvQB6SDo'
}

export const projects = {
  "event": "GetAllProjects",
  "response": {
    "count": 2,
    "currentPage": 1,
    "prevPage": 1,
    "nextPage": 1,
    "total_pages": 1,
    "projects": [
      {
        "id": 1,
        "name": "Quest God",
        "description": "This is a quest god API",
        "owner_id": 1,
        "owner": {
          "id": 1,
          "name": "Demo User",
          "email": "user@demo.com",
          "role_name": "Admin"
        },
        "members": [
          {
            "id": 8,
            "name": "Demo User 2",
            "email": "user2@demo.com",
            "role_name": "Admin",
            "member_id": 1
          }
        ],
        "collections": [
          {
            "id": 1,
            "name": "Users",
            "project_id": 1,
            "requests": [
              {
                "id": 5,
                "name": "Register User",
                "request_method": 1,
                "base_url": "http://localhost:3000",
                "path": "user/signup",
                "request_content_type": 1,
                "body_raw": "json_encoded",
                "collection_id": 1,
                "description": "",
                "method": {
                  "id": 1,
                  "method": "POST"
                },
                "content_type": {
                  "id": 1,
                  "content_type": "application/json"
                },
                "headers": [
                  {
                    "key": "Authorization",
                    "value": "Bearer cxvxvvaksdds",
                    "description": "",
                    "request_id": 5,
                    "id": "1118d224e96a98bb966f6092fda840he"
                  },
                  {
                    "key": "Authorization",
                    "value": "Bearer cxvxvvaksdds",
                    "description": "",
                    "request_id": 5,
                    "id": "1118d224e96a98bb966f6092fda840ht"
                  },
                  {
                    "key": "Authorization",
                    "value": "Bearer fgfggggfgdjl",
                    "description": "",
                    "request_id": 5,
                    "id": "1118d224e96a98bb966f6092fda84se3"
                  },
                  {
                    "key": "Authorization",
                    "value": "Bearer fgfggggfgdjl",
                    "description": "",
                    "request_id": 5,
                    "id": "1118d224e96a98bb966f6092fda84set"
                  }
                ],
                "queries": [
                  {
                    "key": "Authorization",
                    "value": "Bearer cxvxvvaksdds",
                    "description": "",
                    "request_id": 5,
                    "id": "1118d224e96a98bb966f6092fda840ea"
                  },
                  {
                    "key": "Authorization",
                    "value": "Bearer fgfggggfgdjl",
                    "description": "",
                    "request_id": 5,
                    "id": "1118d224e96a98bb966f6092fda840eb"
                  },
                  {
                    "key": "Authorization",
                    "value": "Bearer fgfggggfgdjl",
                    "description": "",
                    "request_id": 5,
                    "id": "1118d224e96a98bb966f6092fda840em"
                  }
                ],
                "bodies": [
                  {
                    "key": "Authorization",
                    "value": "Bearer dfsdfsdf",
                    "description": "",
                    "request_id": 5,
                    "id": "1118d224e96a98bb966f6092fda840er"
                  },
                  {
                    "key": "Authorization",
                    "value": "Bearer dfsdfsdf",
                    "description": "",
                    "request_id": 5,
                    "id": "1118d224e96a98bb966f6092fda840et"
                  },
                  {
                    "key": "Authorization",
                    "value": "Bearer vxcvxcv",
                    "description": "",
                    "request_id": 5,
                    "id": "1118d224e96a98bb966f6092fda84oee"
                  },
                  {
                    "key": "Authorization",
                    "value": "Bearer vxcvxcv",
                    "description": "",
                    "request_id": 5,
                    "id": "1118d224e96a98bb966f6092fda84oes"
                  }
                ]
              },
              {
                "id": 6,
                "name": "Singup User",
                "request_method": 1,
                "base_url": "http://localhost:3000",
                "path": "user/login",
                "request_content_type": 1,
                "body_raw": "json_encoded",
                "collection_id": 1,
                "description": "bla bla bla",
                "method": {
                  "id": 1,
                  "method": "POST"
                },
                "content_type": {
                  "id": 1,
                  "content_type": "application/json"
                },
                "headers": null,
                "queries": null,
                "bodies": null
              },
              {
                "id": 7,
                "name": "Create Notifications",
                "request_method": 1,
                "base_url": "http://localhost:3000",
                "path": "notifications",
                "request_content_type": 1,
                "body_raw": "json_encoded",
                "collection_id": 1,
                "description": "bla bla bla",
                "method": {
                  "id": 1,
                  "method": "POST"
                },
                "content_type": {
                  "id": 1,
                  "content_type": "application/json"
                },
                "headers": null,
                "queries": null,
                "bodies": null
              }
            ]
          }
        ],
        "environments": [
          {
            "id": 1,
            "name": "Base Applicaton Setup",
            "project_id": 1,
            "variables": [
              {
                "id": 1,
                "variable": "base_url",
                "initial_value": "blablablablablba",
                "current_value": "blablbalba",
                "environment_id": 1
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "Numan",
        "description": "This is a Numan backend API",
        "owner_id": 8,
        "owner": {
          "id": 8,
          "name": "Demo User 2",
          "email": "user2@demo.com",
          "role_name": "Admin"
        },
        "members": null,
        "collections": null,
        "environments": null
      }
    ]
  }
}
