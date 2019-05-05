const appData = require("./data");

const getUserById = function(id, cb) {
  const user = appData.users.find(user => user.id === id);
  cb(user);
};

const getPostsForUser = function(userId, cb) {
  const posts = appData.posts.filter(post => post.createdBy === userId);
  cb(posts);
};

module.exports = { getUserById, getPostsForUser };
