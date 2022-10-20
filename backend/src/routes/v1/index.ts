import express from "express";
import articleRoutes from "./articleRoutes";
import authRoutes from "./authRoutes";

const router = express.Router();

router.get("/status", (req, res) => res.send({ status: "ok" }));
router.use("/auth", authRoutes);
router.use("/article", articleRoutes);

export default router;
