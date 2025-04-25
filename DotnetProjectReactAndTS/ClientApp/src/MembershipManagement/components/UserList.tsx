//// components/UserList.tsx
//import React, { useEffect, useState } from "react";
//import { IUserForListUser } from "../ContractsData/User";



//export const getUsers = async (): Promise<IUserForListUser[]> => {
//    const response = await fetch("/api/User/users");
//    if (!response.ok) {
//        throw new Error("Failed to fetch users");
//    }
//    return response.json();
//};




//export const UserList = () => {
//    const [users, setUsers] = useState<IUserForListUser[]>([]);
//    const [loading, setLoading] = useState(true);
//    const [error, setError] = useState("");



//    useEffect(() => {
//        const fetchUsers = async () => {
//            try {
//                const data = await getUsers();
//                setUsers(data);
//            } catch (err) {
//                setError("Error fetching users");
//            } finally {
//                setLoading(false);
//            }
//        };
//        fetchUsers();
//    }, []);


//    if (loading) return <p>Loading users...</p>;
//    if (error) return <p>{error}</p>;
//    return (
//        <div>
//            <h2>User List</h2>
//            {
//                users.map((user) => (
//                <div key={user.id}>
//                    <p><strong>Name:</strong> {user.name}</p>
//                    <p><strong>Email:</strong> {user.email}</p>
//                    <p><strong>Message:</strong> {user.message}</p>
//                    <hr />
//                </div>
//                ))
//            }
//        </div>
//    );
//};


import { IUserForListUser } from "../ContractsData/User";

interface Props {
    users: IUserForListUser[];
    onEdit: (user: IUserForListUser) => void;
    onDelete: (id: number) => void;
}

export default function UserList({ users, onEdit, onDelete }: Props) {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.email}
                    <button onClick={() => onEdit(user)}>Edit</button>
                    <button onClick={() => onDelete(user.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

