import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import FullUserDataProps from "@/@types/FullUserData";

const Usuario = () => {
    const [user, setUser] = useState<FullUserDataProps[]>([]);
    const router = useRouter();

    const fetchUser = async (userId: string) => {
        try {
            const response = await fetch(`http://localhost:3333/user/?id=${userId}`);
            const data = await response.json();
            setUser(data)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const userId = router.query["id"] as string;
        fetchUser(userId);
    }, []);

    if (user.length) return <></>;

    return (
        <>

        </>
    );
};

export default Usuario;
