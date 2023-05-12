import BasicUserDataProps from "@/@types/BasicUserData";
import { useRouter } from "next/router";

type Props = {
    users: BasicUserDataProps[];
};

const UsersTable = ({ users }: Props) => {
    const router = useRouter();

    const formattedDate = (value: Date) => {
        const date = new Date(value);
        const day = date.getDay();
        const month = date.getMonth();
        const year = date.getFullYear();
        const formattedDay = day >= 10 ? day : `0${day}`;
        const formattedMonth = month >= 10 ? month : `0${month}`;

        return `${formattedDay}/${formattedMonth}/${year}`;
    };

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
                    users.map(user => {
                        const date = formattedDate(user.date);

                        return (
                            <tr
                                key={user.id}
                                onClick={() => serUserData(user.id)}
                                className="hover:bg-gray-100 cursor-pointer transition duration-300"
                            >
                                <td className="h-7 text-xs px-3 border border-gray-600">{user.id}</td>
                                <td className="h-7 text-xs px-3 border border-gray-600">{user.firstName}</td>
                                <td className="h-7 text-xs px-3 border border-gray-600">{user.lastName}</td>
                                <td className="h-7 text-xs px-3 border border-gray-600">{user.email}</td>
                                <td className="h-7 text-xs px-3 border border-gray-600">{date}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

export default UsersTable;
