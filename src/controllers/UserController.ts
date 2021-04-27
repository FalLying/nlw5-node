import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UserController {
  async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
    const userService = new UsersService();
    try {
      const createdUser = await userService.create(email);
      return res.status(201).json(createdUser);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { UserController };
