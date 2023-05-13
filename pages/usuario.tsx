import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Loading from "@/components/Loading";

import formatDate from "@/utils/formatDate";

import FullUserDataProps from "@/@types/FullUserData";

const Usuario = () => {
    const [user, setUser] = useState({} as FullUserDataProps);
    const { query } = useRouter();

    const fetchUser = async (userId: string) => {
        try {
            const response = await fetch(`http://localhost:3333/user/${userId}`);
            const data = await response.json();
            data.date = formatDate(data.date);
            data.createdAt = formatDate(data.createdAt);
            setUser(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const userId = query.userId as string;
        fetchUser(userId);
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
                        <span className="font-bold">Conta criada em:</span> {user.createdAt}.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Usuario;
