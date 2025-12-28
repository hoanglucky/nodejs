import express, { Express } from 'express';
import { getCreateUserPage, getHomepage, postCreateUserPage, postDeleteUser, getViewUser, postUpdateUser } from 'controllers/user.controllers';
const router = express.Router()
const webRoutes = (app: Express) => {
    router.get("/", getHomepage)
    router.get("/create-user", getCreateUserPage);
    router.post("/handle-create-user", postCreateUserPage);
    router.post("/handle-delete-user/:id", postDeleteUser);
    router.get("/handle-view-user/:id", getViewUser);
    router.post("/handle-update-user", postUpdateUser);
    app.use("/", router);
}

export default webRoutes;