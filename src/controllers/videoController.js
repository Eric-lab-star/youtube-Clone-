import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (video === null) {
    return res.render("404", { pageTitle: "video not found" });
  }
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};
//edit contorollers
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  } //반드시 return을 적어야한다 .
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.render("404", { pageTitle: "Video not Found" });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  return res.redirect(`/videos/${id}`);
};

export const search = (req, res) => res.send("search videos");
export const upload = (req, res) => res.send("upload vidoes");
export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

//upload controllers
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: " Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags,
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: " Upload Video",
      errormsg: error._message,
    });
  }
};
