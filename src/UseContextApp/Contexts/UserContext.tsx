import { createContext } from "react";
import { User } from "../Models/User";

export const UserContext = createContext<User | undefined>(undefined);