const { mapComments } = require("../models/comment.model.js");

const URL_API = "http://localhost:7000";

const UserService = {
  apiGetUserComments: (userId) => {
    return new Promise((resolve, reject) => {
      fetch(`${URL_API}/user-comments`),
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userId),
        }

          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              mapComments;
              resolve(mapComments(data.comments));
            } else {
              reject(data.error);
            }
          });
    });
  },
  apiUpdateUser: (user) => {
    return new Promise((resolve, reject) => {
      fetch(`${URL_API}/user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            resolve(data.user);
          } else {
            reject(data.error);
          }
        })
    })
  }
}

export default UserService
