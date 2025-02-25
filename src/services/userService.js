// import {
//     createUser as createUserRepopsitory,
//     findUserByEmail as findUserByEmailRepository
// } from '../repositories/userRepository.js';

// import bcrypt from 'bcryptjs';
// import { generateToken } from '../utils/jwtUtils.js';

// export const registerUser = async ({ username, email, password}) => {
//     const existingUser = await findUserByEmailRepository(email);
//     if(existingUser){
//         throw {
//             message: "User already exists",
//             status: 400
//         };
//     }

//     //create the user
//     const user = await createUserRepopsitory({
//         username,
//         email,
//         password
//     });
    
// }

// export const loginUser = async ({ email, password}) => {
//     const user = await findUserByEmailRepository(email);
//     console.log(password);
//     if(!user){
//         throw { 
//             message: "User not found",
//             status: 404
//         };
//     }     
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if(!isPasswordValid){
//         throw {
//             message: "Invalid mail or password",
//             status: 400
//         };
//         return user;
//     }  

//     const token = generateToken(user)
//     return {
//         token,
//         user: {
//             id: user._id, 
//             email: user.email,
//             username: user.username
//         }
//     };
// }


import {
    createUser as createUserRepository,
    findUserByEmail as findUserByEmailRepository
} from '../repositories/userRepository.js';

import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwtUtils.js';

export const registerUser = async ({ username, email, password }) => {
    const existingUser = await findUserByEmailRepository(email);
    if (existingUser) {
        throw {
            message: "User already exists",
            status: 400
        };
    }

    // Create the user with a hashed password
    const user = await createUserRepository({
        username,
        email,
        password
    });
    return user;
};

export const loginUser = async ({ email, password }) => {
    const user = await findUserByEmailRepository(email);
    
    console.log("Fetched User from DB:", user);

    if (!user) {
        throw { 
            message: "User not found",
            status: 404
        };
    }

    console.log("Entered Password:", password);
    console.log("Stored Hashed Password:", user.password);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Password Match:", isPasswordValid);

    if (!isPasswordValid) {
        throw {
            message: "Invalid email or password",
            status: 400
        };
    }

    const token = generateToken(user);

    return {
        token,
        user: {
            id: user._id, 
            email: user.email,
            username: user.username
        }
    };
};
