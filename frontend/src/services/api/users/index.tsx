import apiClient from "../apiClient";
import { user, userWihtoutPassword, userWithId } from "@/type/types";
import { AxiosError } from "axios";

// GET: Fetch all users
export const getAllUsers = async (): Promise<userWithId[] | null> => {
  try {
    const response = await apiClient.get("/users");
    return response.data || null;
  } catch (error) {
    return null;
  }
};

// GET: Fetch user by ID
export const getUserById = async (id: string): Promise<userWithId | null> => {
  try {
    const response = await apiClient.get(`/users/${id}`);
    return response.data || null;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        throw new Error("User tidak ditemukan");
      }
    }

    return null;
  }
};

// POST: Create a new user
export const createUser = async (newUser: user): Promise<user | null> => {
  try {
    const response = await apiClient.post("/users", newUser);
    return response.data;
  } catch (error) {
    return null;
  }
};

// PUT: Update user by ID
export const updateUserById = async (
  id: string,
  updatedUser: userWihtoutPassword
): Promise<user | null> => {
  try {
    const response = await apiClient.put(`/users/${id}`, updatedUser);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        throw new Error("User tidak ditemukan");
      }
    }

    return null;
  }
};

// DELETE: Remove user by ID
export const deleteUserById = async (
  id: string
): Promise<{ success: boolean; id: string }> => {
  try {
    await apiClient.delete(`/users/${id}`);
    return { success: true, id };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        throw new Error("User tidak ditemukan");
      }
    }
    
    return { success: false, id };
  }
};
