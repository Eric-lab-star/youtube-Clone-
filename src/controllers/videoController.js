export const trending = (req, res) => res.render("home");
export const watch = (req, res) => res.render("watch");
export const edit = (req, res) => res.send("Edit Video");
export const search = (req, res) => res.send("search videos");
export const upload = (req, res) => res.send("upload vidoes");
export const deleteVideo = (req, res) => res.send("Delete vidoes");
