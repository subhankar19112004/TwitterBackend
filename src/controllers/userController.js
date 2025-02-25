// Purpose: User controller to handle user related operations.
import { StatusCodes } from "http-status-codes";
import {
    registerUser as registerUserService,
    loginUser as loginUserService,
} from "../services/userService.js";

import { successResponse, errorResponse } from "../utils/responses.js";

export const signupUser = async (req, res) => {
    try {
        const response = await registerUserService({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        return successResponse(
            response,
            StatusCodes.CREATED,
            "User registered successfully",
            res
        );
    } catch (error) {
        return errorResponse(error, res);
    }
};

export const signinUser = async (req, res) => {
    try {
        const { token, user } = await loginUserService({
            email: req.body.email,
            password: req.body.password
        });

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 3600000
        })

        return successResponse(
            {
                user: { id: user.id, email: user.email, username: user.username },
            },
            StatusCodes.OK,
            "User logged in successfully",
            res
        );
    } catch (error) {
        return errorResponse(error, res);
    }
};

