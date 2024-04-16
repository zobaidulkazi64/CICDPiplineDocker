import { Request, Response, NextFunction } from "express";
import User from "@/models/User";
import { UserCreateSchema } from "@/schema";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const parseBody = UserCreateSchema.safeParse(req.body);

    if (!parseBody.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid request body",
        errors: parseBody.error.errors,
      });
    }

    // Check if user already exists

    const existingUser = await User.findOne({ email: parseBody.data.email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    // Create user
    const user = new User(parseBody.data);

    await user.save();

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {}
};

export default createUser;
