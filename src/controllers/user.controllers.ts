import exp from "constants";
import { Request, Response } from "express";
import { getAllUsers, handleCreateUser, handleDeleteUser, getUserById, updateUserById } from "services/user.services";
const getHomepage = async (req: Request, res: Response) => {
    const users = await getAllUsers();

    return res.render("home", {
        users: users

    })
}
const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user")
}
const postCreateUserPage = async (req: Request, res: Response) => {
    const { fullname, email, address } = req.body;
    //handle create user
    await handleCreateUser(fullname, email, address)
    return res.redirect("/")
}


const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
    return res.redirect("/")
}
const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserById(id);
    return res.render("view-user", {
        id: id,
        user: user
    })
}

const postUpdateUser = async (req: Request, res: Response) => {
    const { id, email, address, fullname } = req.body;
    await updateUserById(id, email, address, fullname);
    const user = await getUserById(id);
    return res.redirect("/")
}

export { getHomepage, getCreateUserPage, postCreateUserPage, postDeleteUser, getViewUser, postUpdateUser }
