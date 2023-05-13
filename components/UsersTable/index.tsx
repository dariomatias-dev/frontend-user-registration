import BasicUserDataProps from "@/@types/BasicUserData";
import formatDate from "@/utils/formatDate";
import { useRouter } from "next/router";

type Props = {
    users: BasicUserDataProps[];
};

const UsersTable = ({ users }: Props) => {
    const router = useRouter();

    const serUserData = (id: string) => {
        router.push(`/usuario/?userId=${id}`);
    };

    return (
        <table className="w-full min-w-[768px] border-collapse text-center">
            <thead className="w-full bg-black text-white">
                <tr>
                    <th className="w-1/5 h-7 border border-gray-600">
                        id
                    </th>
                    <th className="w-1/5 h-7 border border-gray-600">
                        Primeiro nome
                    </th>
                    <th className="w-1/5 h-7 border border-gray-600">
                        Sobrenome
                    </th>
                    <th className="w-1/5 h-7 border border-gray-600">
                        Email
                    </th>
                    <th className="w-1/5 h-7 border border-gray-600">
                        Data de nascimento
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(({id, firstName, lastName, email, date}) => {
                        const formattedDate = formatDate(date);

                        return (
                            <tr
                                key={id}
                                onClick={() => serUserData(id)}
                                className="hover:bg-gray-100 cursor-pointer transition duration-300"
                            >
                                <td className="h-7 text-xs px-3 border border-gray-600">{id}</td>
                                <td className="h-7 text-xs px-3 border border-gray-600">{firstName}</td>
                                <td className="h-7 text-xs px-3 border border-gray-600">{lastName}</td>
                                <td className="h-7 text-xs px-3 border border-gray-600">{email}</td>
                                <td className="h-7 text-xs px-3 border border-gray-600">{formattedDate}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default UsersTable;
