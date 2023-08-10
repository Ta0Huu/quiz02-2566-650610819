"use client";

import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner
          fullName="Anuwat Aeamsri"
          studentId="650610819"
          maiN="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
          Likes="506"
        />

        {/* Comment Example */}
        {comments.map((c) => (
          <Comment
            key={c}
            userImagePath={c.userImagePath}
            username={c.username}
            commentText={c.commentText}
            likeNum={c.likeNum}
            replies={c.replies}
          />
        ))}
      </div>
    </div>
  );
}
