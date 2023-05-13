import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Loading from "@/components/Loading";

import FullUserDataProps from "@/@types/FullUserData";

import fetchUser from "@/utils/fetchUser";

const Usuario = () => {
    const [user, setUser] = useState({} as FullUserDataProps);
    const { query, push } = useRouter();

    const fetchUserData = async (userId: string) => {
        const data = await fetchUser(userId, true);
        setUser(data);
    };

    const editUser = () => {
        push(`/editar-usuario/?id=${user.id}`);
    };

    const deleteUser = async () => {
        await fetch(`http://localhost:3333/user/${user.id}`, { method: 'DELETE' });
        push("/usuarios");
    };

    useEffect(() => {
        const userId = query.userId as string;
        fetchUserData(userId);
    }, []);

    if (JSON.stringify(user) === "{}")
        return <Loading />;

    return (
        <div className="flex justify-center mt-28 mb-16">
            <div className="mx-10">
                <h1 className="text-5xl font-bold">
                    {user.firstName} {user.lastName}
                </h1>
                <h2 className="text-3xl font-bold mt-4">
                    Informações do usuário
                </h2>
                <div className="text-lg mt-2">
                    <p>
                        <span className="font-bold">id:</span> {user.id}.
                    </p>
                    <p>
                        <span className="font-bold">Primeiro nome:</span> {user.firstName}.
                    </p>
                    <p>
                        <span className="font-bold">Sobrenome:</span> {user.lastName}.
                    </p>
                    <p>
                        <span className="font-bold">Email:</span> {user.email}.
                    </p>
                    <p>
                        <span className="font-bold">Telefone:</span> {user.tel}.
                    </p>
                    <p>
                        <span className="font-bold">Data de nascimento:</span> {user.date}.
                    </p>
                    <p>
                        <span className="font-bold">Cidade:</span> {user.city}.
                    </p>
                    <p>
                        <span className="font-bold">CEP:</span> {user.cep}.
                    </p>
                    <p>
                        <span className="font-bold">Estado:</span> {user.state}.
                    </p>
                    <p>
                        <span className="font-bold">País:</span> {user.country}.
                    </p>
                    <p>
                        <span className="font-bold">Usuário criado em:</span> {user.createdAt}.
                    </p>
                    <p>
                        <span className="font-bold">Usuário atualizado em:</span> {user.updatedAt === user.createdAt ? "Ainda não foi atualizado": user.updatedAt}.
                    </p>
                </div>

                <div className="flex justify-between mt-8">
                    <button
                        type="button"
                        onClick={editUser}
                        className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-3 px-8 rounded-md transition duration-300"
                    >
                        Editar
                    </button>

                    <button
                        type="button"
                        onClick={deleteUser}
                        className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-3 px-8 rounded-md transition duration-300"
                    >
                        Excluir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Usuario;
