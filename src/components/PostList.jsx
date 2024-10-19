import React from "react";

import PostItem from "./PostItem";

const PostList = ({ hideButtons = false }) => {
  return (
    <div className="list">
      <PostItem hideButtons={hideButtons} />
      <PostItem hideButtons={hideButtons} />
      <PostItem hideButtons={hideButtons} />
      <PostItem hideButtons={hideButtons} />
      <PostItem hideButtons={hideButtons} />
      <PostItem hideButtons={hideButtons} />
      <PostItem hideButtons={hideButtons} />
      <PostItem hideButtons={hideButtons} />
    </div>
  );
};

export default PostList;
