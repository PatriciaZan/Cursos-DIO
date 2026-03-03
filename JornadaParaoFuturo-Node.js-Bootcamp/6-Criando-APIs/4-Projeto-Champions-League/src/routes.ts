import { Router } from "express";
import {
  deletePlayer,
  getPlayer,
  getPlayerById,
  postPlayer,
  updatePlayer,
} from "./controllers/players-controller";

const router = Router();

router.get("/players", getPlayer);
router.post("players", postPlayer);
router.delete("/players/:id", deletePlayer);
router.patch("/players/:id", updatePlayer);

router.get("/players/:id", getPlayerById);

export default router;
