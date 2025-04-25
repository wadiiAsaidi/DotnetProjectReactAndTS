import { useEffect, useState } from "react";
import { IStatus, IUserForListUser } from "./MembershipManagement/ContractsData/User";
import UserForm from "./MembershipManagement/components/UserForm";
import UserList from "./MembershipManagement/components/UserList";
import { createRoot } from "react-dom/client";
export const getUsers = async (): Promise<IUserForListUser[]> => {
    const response = await fetch("/api/User/users");
    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    return response.json();
};

export const saveUser = async (user: IUserForListUser): Promise<IStatus> => {
    const response = await fetch("/api/User/saveUser",
        {
            method: 'POST', // or 'PUT', or even 'DELETE' if your backend expects a body
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user), // 👈 serialization here
        });

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    return response.json();
};

export const deleteUser = async (id: number): Promise<IStatus> => {
    const response = await fetch("/api/User/deleteUser",
        {
            method: 'POST', // or 'PUT', or even 'DELETE' if your backend expects a body
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(id), // 👈 serialization here
        });

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }
    return response.json();
};

function App() {
    const [users, setUsers] = useState<IUserForListUser[]>([]);
    const [selectedUser, setSelectedUser] = useState<IUserForListUser | null>(null);
    const [loading, setLoading] = useState(true);

    // Fetch data on mount
    useEffect(() => {
        async function fetchData() {
            const data = await getUsers();
            setUsers(data);
            setLoading(false);
        }

        fetchData();
    }, []);

    const handleAddOrUpdate = async (user: IUserForListUser) => {
        await saveUser(user);
        const updatedUsers = await getUsers();
        setUsers(updatedUsers);
        setSelectedUser(null);
    };

    const handleDelete = async (id: number) => {
        await deleteUser(id);
        const updatedUsers = await getUsers();
        setUsers(updatedUsers);
        if (selectedUser?.id === id) setSelectedUser(null);
    };

    return (
        <div className="App">
            <h1>User Manager</h1>
            <UserForm
                onSubmit={handleAddOrUpdate}
                selectedUser={selectedUser}
                clearSelection={() => setSelectedUser(null)}
            />
            {loading ? (
                <p>Loading users...</p>
            ) : (
                <UserList
                    users={users}
                    onEdit={setSelectedUser}
                    onDelete={handleDelete}
                />
            )}
        </div>
    );
}


const container = document.getElementById("react-root");
const root = createRoot(container!);
root.render(<App />);
