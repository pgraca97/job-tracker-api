import { Router } from "express";
import { applicationController } from "../controllers/application.controller.js";

const router = Router();

// POST /api/applications - Criar nova candidatura
router.post("/", applicationController.create);

// GET /api/applications - Listar todas as candidaturas
router.get("/", applicationController.getAll);

export default router;