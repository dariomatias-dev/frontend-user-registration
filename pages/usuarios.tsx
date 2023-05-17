import { useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import Loading from "@/components/Loading";
import UsersTable from "@/components/UsersTable";

import BasicUserDataProps from "@/@types/BasicUserData";

type RegistrationDataProps = {
    users: BasicUserDataProps[];
    skip: number;
};

const Usuarios = () => {
    const [registrationData, setRegistrationData] = useState<RegistrationDataProps>({
        users: [],
        skip: 0,
    });
    const [amountUsers, setAmountUsers] = useState(0);

    const fetchUsers = async (skip: number) => {
        try {
            const response = await fetch(`http://localhost:3333/users/?skip=${skip}`);
            const data = await response.json();
            setRegistrationData({ ...data });
        } catch (err) {
            console.log(err);
        }
    };

    const fetchAmountUsers = async () => {
        try {
            const response = await fetch("http://localhost:3333/users/count");
            const data = await response.json();
            setAmountUsers(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchUsers(0);
        fetchAmountUsers();
    }, []);

    if (JSON.stringify(registrationData) === '{"users":[],"skip":0}')
        return <Loading />;

    return (
        <div className="mx-10">
            <h1 className="text-center text-4xl font-bold mt-36">
                Tabelas com as informações de 10 usuários cadastrados
            </h1>

            <div className="mt-16 mx-auto overflow-x-scroll table:overflow-x-hidden">
                <UsersTable users={registrationData.users} />
            </div>

            <div className="flex justify-between my-12">
                <button
                    type="button"
                    disabled={registrationData.skip === 10}
                    onClick={() => fetchUsers(registrationData.skip - 20)}
                    className="flex items-center gap-1 sm:gap-2 bg-zinc-900 hover:bg-zinc-800 text-white py-3 px-6 sm:px-8 rounded-md disabled:bg-zinc-700 disabled:text-zinc-300 disabled:cursor-not-allowed transition duration-300"
                >
                    <FiArrowLeft />
                    Voltar
                </button>

                <button
                    type="button"
                    disabled={amountUsers <= registrationData.skip}
                    onClick={() => fetchUsers(registrationData.skip)}
                    className="flex items-center gap-1 sm:gap-2 bg-zinc-900 hover:bg-zinc-800 text-white py-3 px-6 sm:px-8 rounded-md disabled:bg-zinc-700 disabled:text-zinc-300 disabled:cursor-not-allowed transition duration-300"
                >
                    Próximo
                    <FiArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Usuarios;
