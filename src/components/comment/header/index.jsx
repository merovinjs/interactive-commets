import React from "react";
import styles from "./styles.module.scss";
import { Button } from "../../button";
import { useComment } from "../useComment";
const Header = () => {
  const {
    currentUser,
    comment: {
      createdAt,
      user: { image, username },
    },
  } = useComment();

  const ownedmachUser = currentUser.username === username;
  console.log(ownedmachUser);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.imageWrapper}>
        <img src={image.png} alt="username" />
      </div>
      <h3 className={styles.username}>{username}</h3>
      {ownedmachUser && <span className={styles.youIndicator}>you</span>}
      <div className={styles.createdAt}>{createdAt}</div>
      <div className={styles.actionsButton}>
        {ownedmachUser ? (
          <>
            <Button>
              <img src="/images/icon-edit.svg" alt="Edit" />
              Edit
            </Button>
            <Button variant="warning">
              <img src="/images/icon-delete.svg" alt="Edit" />
              Delete
            </Button>
          </>
        ) : (
          <Button>
            <img src="/images/icon-reply.svg" alt="Edit" />
            Reply
          </Button>
        )}
      </div>
    </div>
  );
};

export { Header };
