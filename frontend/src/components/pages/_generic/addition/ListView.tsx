import useUserHandler from "@/hooks/api/use-user-handler";
import avatar from "../../../../assets/avatar.png";
import { usersState } from "@/stores/zustand";
import { useEffect } from "react";

export default function ListView() {
  const { fetchAllUsers } = useUserHandler();
  const { users } = usersState();

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white border border-gray-300">
      <div className="w-full flex flex-col gap-y-8">
        <h2 className="text-xl font-bold mb-2 text-green-500">
          Daftar Pengguna
        </h2>
      </div>
      {users?.length === 0 ? (
        <p className="text-center">Tidak ada pengguna terdaftar</p>
      ) : (
        <div className="space-y-4">
          {users?.map((user) => (
            <div
              key={user.id}
              className="border border-gray-100 p-4 rounded-lg flex justify-between items-center"
            >
              <div className="flex items-center gap-x-3">
                <div
                  className="w-10 h-10 rounded bg-cover bg-center"
                  style={{ backgroundImage: `url(${avatar})` }}
                />
                <div className="">
                  <p className="text-lg font-semibold">{user.name}</p>
                  <p className="text-gray-500 text-sm">{user.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
