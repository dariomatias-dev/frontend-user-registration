import { useEffect, useState, MouseEvent } from "react";
import { useRouter } from "next/router";

import Loading from "@/components/Loading";

import FullUserDataProps from "@/@types/FullUserData";

import fetchUser from "@/utils/fetchUser";

const Usuario = () => {
    const [user, setUser] = useState({} as FullUserDataProps);
    const [popupConfirm, setPopupConfirm] = useState(false);
    const { query, push } = useRouter();

    // Manda uma solicitação para o banco de dados requisitando todos os dados do usuário que corresponde ao id passado na url, e guarda esses dados.
    const fetchUserData = async (userId: string) => {
        const data = await fetchUser(userId, true);
        setUser(data);
    };

    // Redireciona para a página de edição dos dados do usuário.
    const editUser = () => {
        push(`/editar-usuario/?id=${user.id}`);
    };

    // Envia para o banco de dados o id do usuário que deve ser excluído e redireciona para a página de usuários.
    const deleteUser = async () => {
        await fetch(`http://localhost:3333/user/${user.id}`, { method: 'DELETE' });
        push("/usuarios");
    };

    // Quando chamado verifica se é um chamado válido para fechar a pop-up de confirmação de exclusão de usuário.
    const closePopup = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        const tagClassName = (e.target as Element).classList[0];

        if (tagClassName === "popup-wrapper")
            setPopupConfirm(false);
    };

    // Esconde ou mostra a barra de rolagem de acordo com o estado (mostrando ou escondida) da pop-up.
    useEffect(() => {
        if (popupConfirm)
            document.body.style.overflowY = "hidden";
        else
            document.body.style.overflowY = "auto";
    }, [popupConfirm]);

    // Resgata o id do usuário da URL quando a página é aberta e manda para uma função que irá buscar o usuário com base no id.
    useEffect(() => {
        const userId = query.userId as string;
        fetchUserData(userId);
    }, []);

    // Mostra um componente de carregamento caso os dados do usuário ainda não estejam disponíveis.
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
                        <span className="font-bold">Usuário atualizado em:</span> {user.updatedAt === user.createdAt ? "Ainda não foi atualizado" : user.updatedAt}.
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
                        onClick={() => setPopupConfirm(true)}
                        className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-3 px-8 rounded-md transition duration-300"
                    >
                        Excluir
                    </button>
                </div>
            </div>

            {
                popupConfirm && (
                    <div
                        onClick={closePopup}
                        className="popup-wrapper fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm z-20"
                    >
                        <div className="w-full max-w-[400px] bg-black text-center text-white p-4 rounded-md">
                            <h1 className="text-4xl font-bold mb-2">
                                Excluir usuário
                            </h1>
                            <p>
                                Atenção, usuários excluídos não podem ser recuperados. Prossiga apenas se tiver certeza.
                            </p>
                            <button
                                onClick={deleteUser}
                                className="popup-button flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold mt-8 mx-auto py-3 px-8 rounded-md transition duration-300">
                                Excluir
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Usuario;
