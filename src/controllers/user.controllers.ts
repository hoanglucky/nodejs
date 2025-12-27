import exp from "constants";
import { Request, Response } from "express";
import { handleCreateUser } from "../services/user.services";
const getHomepage = (req: Request, res: Response) => {
    return res.render("home")
}
const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user")
}
const postCreateUserPage = (req: Request, res: Response) => {
    console.log(">>> check data", req.body)
    const { fullname, email, address } = req.body;
    //handle create user
    handleCreateUser(fullname, email, address)
    return res.redirect("/")
}
export { getHomepage, getCreateUserPage, postCreateUserPage }
