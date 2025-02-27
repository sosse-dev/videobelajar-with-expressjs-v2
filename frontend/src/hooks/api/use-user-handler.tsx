import { useCallback } from "react";

import { user, userWihtoutPassword } from "@/type/types";
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from "@/services/api/users";
import { toast } from "sonner";
import { usersState } from "@/stores/zustand";

const useUserHandler = () => {
  const { addUsers } = usersState();
  const fetchAllUsers = useCallback(async () => {
    try {
      const allUsers = await getAllUsers();

      addUsers(allUsers);
      return allUsers;
    } catch (error) {
      handleApiError(error, "Terjadi kesalahan");
      return [];
    }
  }, []);

  const fetchUserById = useCallback(async (id: string) => {
    try {
      const singleUser = await getUserById(id);

      return singleUser;
    } catch (error) {
      handleApiError(error, "Terjadi Kesalahan saat memuat user");
      return null;
    }
  }, []);

  const createUserHandler = useCallback(async (newUser: user) => {
    try {
      const createdUser = await createUser(newUser);

      return createdUser;
    } catch (error) {
      handleApiError(error, "Gagal membuat akun");
      return null;
    }
  }, []);

  const updateUser = useCallback(
    async (id: string, updatedData: userWihtoutPassword) => {
      try {
        const updatedUser = await updateUserById(id, updatedData);

        return updatedUser;
      } catch (error) {
        handleApiError(error, "Terjadi kesalahan dalam mengubah profile");
        return null;
      }
    },
    []
  );

  const deleteUser = useCallback(async (id: string) => {
    try {
      const deleteResult = await deleteUserById(id);

      return deleteResult;
    } catch (error) {
      handleApiError(error, "Gagal menghapus akun ini");
      return null;
    }
  }, []);

  const handleApiError = (error: unknown, defaultMessage: string) => {
    if (error instanceof Error) {
      toast.error(error.message);
    } else {
      toast.error(defaultMessage);
    }
  };

  return {
    fetchAllUsers,
    fetchUserById,
    createUserHandler,
    updateUser,
    deleteUser,
  };
};

export default useUserHandler;
