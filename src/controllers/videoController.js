const fakeUser = {
  username: "Eric",
  loggedIn: true,
};

let videos = [
  {
    title: "First Video",
    comments: 2,
    createdAt: "2 minutes ago",
    views: 58,
    id: 1,
    rating: 3,
  },
  {
    title: "Second Video",
    comments: 2,
    createdAt: "2 minutes ago",
    views: 58,
    id: 2,
    rating: 3,
  },
  {
    title: "Third Video",
    comments: 2,
    createdAt: "2 minutes ago",
    views: 58,
    id: 3,
    rating: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", fakeUser, videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}` });
};
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("search videos");
export const upload = (req, res) => res.send("upload vidoes");
export const deleteVideo = (req, res) => res.send("Delete vidoes");
