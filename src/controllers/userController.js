import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Create Account" });
};
export const postJoin = async (req, res) => {
  const { name, username, email, password, location } = req.body;
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.render("join", {
      pageTitle: "Join",
      errorMessage: "This username or email is already taken",
    });
  }
  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect("/login");
};
export const edit = (req, res) => res.send("edit user");
export const remove = (req, res) => res.send("Delete user");
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.sedn("see profile");
