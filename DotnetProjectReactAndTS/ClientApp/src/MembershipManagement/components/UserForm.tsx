import { useState, useEffect } from "react";
import { IUserForListUser } from "../ContractsData/User";

interface Props {
    onSubmit: (user: IUserForListUser) => void;
    selectedUser?: IUserForListUser | null;
    clearSelection: () => void;
}

export default function UserForm({ onSubmit, selectedUser, clearSelection }: Props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        if (selectedUser) {
            setName(selectedUser.name);
            setEmail(selectedUser.email);
        }
    }, [selectedUser]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email) return;

        onSubmit({
            id: selectedUser ? selectedUser.id : Date.now(),
            name,
            email,
        });

        setName("");
        setEmail("");
        clearSelection();
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">{selectedUser ? "Update" : "Add"} User</button>
            {selectedUser && <button onClick={clearSelection}>Cancel</button>}
        </form>
    );
}
