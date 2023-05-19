import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Form from "@/components/Form";

import FullUserDataProps from "@/@types/FullUserData";
import fetchUser from "@/utils/fetchUser";
import Loading from "@/components/Loading";

const EditUser = () => {
    const [user, setUser] = useState({} as FullUserDataProps);
    const { query } = useRouter();

    // Busca os dados do usuário para poder inseri-los no formulário para edição.
    const fetchUserData = async (userId: string) => {
        const data = await fetchUser(userId, false);
        setUser(data);
    };

    // Resgata o id do usuário da URL quando a página é aberta e manda para uma função que irá buscar o usuário com base no id.
    useEffect(() => {
        const userId = query.id as string;
        fetchUserData(userId);
    }, []);

    if (JSON.stringify(user) === "{}")
        return <Loading />;

    return <Form user={user} />
};

export default EditUser;
