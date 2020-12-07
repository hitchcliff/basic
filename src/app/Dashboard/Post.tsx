import { Button, Col, message, Row } from "antd";
import React, { useEffect, useState } from "react";
import PostCard from "../../component/PostCard/PostCard";
import Add from "./Add";
import useBlogService from "../Hooks/useBlogService";
import { postSelectAllSelector } from "../../features/Post/post.selector";
import { PostTypes } from "../../component/PostCard/types";
import { fetchAllPosts } from "../../features/Post/post.thunk";
import { useDispatch, useSelector } from "react-redux";
import EditPost from "./EditPost";
import { userSelectAllSelector } from "../../features/User/user.selector";
import { Direction } from "../../App.types";

enum BEM {
  Layout = "dashboard-posts",
  Form = "dashboard-posts__form",
  Content = "dashboard-posts__content",
  Cards = "dashboard-posts__content-card",
}

export default function Posts() {
  const [editting, setEditting] = useState(false);
  const [currentEditId, setCurrentEditId] = useState<string>("");
  const user = useSelector(userSelectAllSelector);

  const { addPost, destroyPost } = useBlogService();
  const posts: PostTypes[] = useSelector(postSelectAllSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  function handleAdd(post: PostTypes) {
    // check if its me
    if (user[0].uid === "ZFIqdze4pAMbzMGEaJzuSh1Q3vt1" && user[0].logged) {
      addPost({
        ...post,
        user: {
          uid: user[0].uid,
          name: "Kevin Nacario",
        },
      });
    } else {
      message.warning("Cannot create a post.");
    }
  }

  function handleDestroy(post: PostTypes) {
    // check if its me
    if (user[0].uid === "ZFIqdze4pAMbzMGEaJzuSh1Q3vt1" && user[0].logged) {
      destroyPost(post);
    } else {
      message.warning("Cannot delete a post.");
    }
  }

  function handleEdit(id: string) {
    setEditting(true);
    setCurrentEditId(id);
  }

  return (
    <Row className={BEM.Layout} align="top">
      <Col md={8} className={BEM.Form} style={{ marginRight: "10px" }}>
        <Add title="Add a post" handleClick={handleAdd} />
      </Col>

      {/* if edit, show `Edit` Component */}
      {/* if !edit, show `Col` Component */}
      {!editting ? (
        <Col md={16} className={BEM.Content}>
          {posts.map((post: PostTypes) => {
            return (
              <Row key={post.id} className={BEM.Cards}>
                <PostCard post={post} route={Direction.Blog}>
                  <Button
                    className="delete-button"
                    onClick={() => handleDestroy(post)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="update-button"
                    onClick={() => handleEdit(post.id)}
                  >
                    Update
                  </Button>
                </PostCard>
              </Row>
            );
          })}
        </Col>
      ) : (
        <EditPost handleClick={setEditting} postid={currentEditId} />
      )}
    </Row>
  );
}
