//db에 동영상 정보를 설명해주는 역활을 한다. 구체적인 값을 주는 것이 아니라 형태를 설명하는 역활을 한다 .
// 더 많은 정보는 mongoose 에서 확인
import mongoose from "mongoose";
//schema 에서 동영상의 모습을 설명한다
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true, maxLength: 200 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, tirm: true }],
  meta: {
    views: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
  },
});
//모델 이름과 schema를 묶어 준다.
const Video = mongoose.model("Video", videoSchema);

export default Video;
