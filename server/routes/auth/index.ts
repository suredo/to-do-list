import {Router} from "express";

const routes = Router();

routes.get("/", (req, res) => {
    res.send("auth endpoint");
});

export default routes;