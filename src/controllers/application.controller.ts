import { Request, Response } from "express";
import { applicationModel } from "../models/application.model.js";

export const applicationController = {
  create: async (req: Request, res: Response) => {
    try {
      const { company, position, status, notes } = req.body;

      // Validação básica para já
      if (!company || !position) {
        return res.status(400).json({
          error: "Company and position are required",
        });
      }

      const newApplication = await applicationModel.create({
        company,
        position,
        status,
        notes,
      });

      res.status(201).json(newApplication);
    } catch (error) {
      console.error("Error creating application:", error);
      res.status(500).json({ error: "Failed to create application" });
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const allApplications = await applicationModel.getAll();
      res.status(200).json(allApplications);
    } catch (error) {
      console.error("Error fetching applications:", error);
      res.status(500).json({ error: "Failed to fetch applications" });
    }
  },
};