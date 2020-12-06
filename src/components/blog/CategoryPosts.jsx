import React, { Fragment, useState, useEffect } from "react";
import PostCard from "./PostCard";
import config from "../../config";

function CategoryPosts({ match }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${config.baseUrl}/categories/${match.params.id}/posts`)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, [match]);

  return (
    <Fragment>
      <div className="category container-fluid">
        <div className="categoryTitle row">
          <div className="categoryTitle col-md-12">
            <h4 className="changeText">Espacio Abierto / Categorías </h4>
          </div>
        </div>
        <div className="categoryTitle row">
          <div className="categoryTitle col-md-12">
            {posts.map((post, i) => (
              <PostCard key={`post_${i}`} post={post} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CategoryPosts;
