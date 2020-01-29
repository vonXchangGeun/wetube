import express from "express";

export const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("Users"));
userRouter.get(routes.userDetail, (req, res) => res.send("UserDetail"));
userRouter.get(routes.editProfile, (req, res) => res.send("Edit Profile"));
userRouter.get(routes.changePassword, (req, res) =>
  res.send("Change Password")
);

export default userRouter;
