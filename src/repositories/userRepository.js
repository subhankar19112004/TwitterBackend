// import User from "../schema/User.js";

// export const createUser = async ({ username, email, password }) => {
//     try {
//         const user = await User.create({ username, email, password});
//         return user;
//     } catch (error) { 
//         throw error;   
//     }
// };

// export const findUserByEmail = async (email) => {
//     try {
//         console.log(email);
//         const user = await User.findOne({ email });
//         console.log(user);
//         return user;
//     } catch (error) {
//         throw error;
        
//     }
// }




import User from "../schema/User.js";
import bcrypt from "bcryptjs";

export const createUser = async ({ username, email, password }) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hash password
        const user = await User.create({ 
            username, 
            email, 
            password: hashedPassword // Store hashed password
        });
        return user;
    } catch (error) { 
        throw error;   
    }
};

export const findUserByEmail = async (email) => {
    try {
        console.log("Searching user with email:", email);
        const user = await User.findOne({ email });
        console.log("User found:", user);
        return user;
    } catch (error) {
        throw error;
    }
};
