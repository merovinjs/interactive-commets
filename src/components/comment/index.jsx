import React from "react";
import { Reactions } from "./reactions";
import { Body } from "./body";
import { Header } from "./header";
import styles from "./styles.module.scss";
import { useComment } from "./useComment";
import { CommentProvider } from "./useComment";
{
  /*her bir commentin içinde bir replay olabilir yani o commente bir başka kullanıcı cevap vermiş olabilir bu yüzden 
biz replayıda ‘conditional render etmemiz gerekir.bu replay comment ile aynı template sahip olmalıdır bu durum işimizii kolaylaştırır. 
*/
}

const Comment = () => {
  const { currentUser, comment } = useComment();

  return (
    <>
      <div className={styles.commentWrapper}>
        <Reactions />
        <div className={styles.commentContentArea}>
          <Header />
          <Body />
        </div>
      </div>

      {comment.replies?.length > 0 && (
        <div className={styles.replies}>
          {comment?.replies.map((reply) => (
            <CommentProvider
              key={reply.id}
              data={{ comment: reply, currentUser }}
            >
              <Comment />
            </CommentProvider>
          ))}
        </div>
      )}
    </>
  );
};
export { Comment };
