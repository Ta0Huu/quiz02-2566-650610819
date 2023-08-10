import { Reply } from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  let unlike = false;
  if (likeNum == "0") {
    unlike = false;
  } else {
    unlike = true;
  }
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
          q
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            {username}
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>{commentText}</span>
          {unlike && (
            <div className="d-flex align-items-center gap-1">
              <img src="/like.svg" width={20}></img>
              <span style={{ color: "#B0B3B8" }}>{likeNum} คน</span>
            </div>
          )}
        </div>
      </div>
      {replies.map((R) => (
        <Reply
          username={R.username}
          userImagePath={R.userImagePath}
          replyText={R.replyText}
          likeNum={R.likeNum}
        />
      ))}
    </div>
  );
};
