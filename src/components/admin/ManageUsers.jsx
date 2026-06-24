const ManageUsers = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">
        Manage Users
      </h2>

      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td colSpan="3" className="text-center py-4">
              No users found
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;