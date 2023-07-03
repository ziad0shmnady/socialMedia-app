import User from "../model/userModel";
import Post from "../model/postModel";
import Comment from "../model/commentModel";
import React from "../model/reactModel";
// relationship between user and post
User.hasMany(Post, { foreignKey: "userId" });

// relationship between user and comment
User.hasMany(Comment, { foreignKey: "userId" });

// relationship between post and comment
Post.hasMany(Comment, { foreignKey: "postId" });
// relationship between post and React
Post.hasMany(React, { foreignKey: "postId" });
