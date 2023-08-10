"use client";

import { PostOwner } from "@/components/PostOwner";
import { Comment } from "@/components/Comment";
import { Reply } from "@/components/Reply";

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
        <Comment
          userImagePath="/profileImages/lisa.jpg"
          username="Lisa"
          commentText="จริวค่า"
          likeNum="999"
          replies={[
            {
              username: "หมาน้อย",
              userImagePath: "/profileImages/puppy.jpg",
              replyText: "จริงค้าบบบบบบบบ",
              likeNum: 0,
            },
            {
              username: "Cat Meme",
              userImagePath: "/profileImages/popcat.png",
              replyText: "ลิซ่าาาาาาา",
              likeNum: 2,
            },
          ]}
        />

        {/* map-loop render Comment component here */}
        <Comment
          username="Charlie Brown"
          userImagePath="/profileImages/charliebrown.jpg"
          commentText="บ้าไปแล้ว"
          likeNum="0"
          replies={[]}
        />
      </div>
    </div>
  );
}
