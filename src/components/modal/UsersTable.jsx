import { Trash2, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useUserStore } from "../../services/store/useUserStore";
import LoadingIndicator from "../common/LoadingIndicator";
import StatusModal from "./StatusModal";
import ActionModal from "./ActionModal";

export default function UsersTable() {
  const { users, error, loading, getUsers, deleteUser } = useUserStore();
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [openActionModal, setOpenActionModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const handleDeleteUser = (id) => {
    setSelectedUserId(id);
    setOpenActionModal(true);
  };

  const confirmDeleteUser = async () => {
    if (selectedUserId) {
      try {
        setDeleteLoading(true);
        setOpenActionModal(false);

        await deleteUser(selectedUserId);
        await getUsers();
        
        setOpenStatusModal(true);
        
      } catch (error) {
        console.error('Error al eliminar usuario:', error);
        setOpenStatusModal(true);
      } finally {
        setDeleteLoading(false);
        setSelectedUserId(null);
      }
    }
  };

  const cancelDeleteUser = () => {
    setOpenActionModal(false);
    setSelectedUserId(null);
  };

  const closeStatusModal = () => {
    setOpenStatusModal(false);
  };

  if (loading) return <LoadingIndicator className="!h-[500px] !min-w-xl" text="usuarios" />;

  return (
    <>
      <div className="space-y-6 mr-5">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold">Lista de Usuarios</h3>
          <div className="text-sm text-gray-800">
            Total: {users?.length || 0} usuarios
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Usuario
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Correo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha Modificación
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rol
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user?.id} className="hover:bg-gray-50">
                    <td className="px-6 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                            <User className="h-6 w-6 text-red-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user?.nombre} {user?.apellido}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900">
                          {user?.correo}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user?.fechaModificacion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex uppercase px-2 py-1 text-xs font-semibold rounded-full ${
                          user?.rol === "Usuario"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {user.rol}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {!loading && (!users || users.length === 0) && (
            <div className="text-center py-8 text-gray-500">
              No hay usuarios registrados
            </div>
          )}
        </div>
      </div>

      {openActionModal && (
        <ActionModal 
          onClick={confirmDeleteUser} 
          onClose={cancelDeleteUser}
          loading={deleteLoading}
        />
      )}

      {openStatusModal && (
        <StatusModal 
          text="eliminó" 
          status={!error} 
          onClose={closeStatusModal} 
        />
      )}
    </>
  );
}
