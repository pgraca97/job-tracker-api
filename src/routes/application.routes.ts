import { Router } from "express";
import { applicationController } from "../controllers/application.controller.js";

const router = Router();

// POST /api/applications - Criar nova candidatura
router.post("/", applicationController.create);

// GET /api/applications - Listar todas as candidaturas
router.get("/", applicationController.getAll);

// GET /api/applications/:id - Obter detalhes de uma candidatura específica
router.get("/:id", applicationController.getById);

// PATCH /api/applications/:id - Atualizar uma candidatura específica
router.patch("/:id", applicationController.update);

// DELETE /api/applications/:id - Remover uma candidatura
router.delete("/:id", applicationController.delete);

export default router;