import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FiMoreVertical } from 'react-icons/fi';

const Header = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        console.log(showPopup)
    }, [showPopup])

    return (
        <header className="fixed top-0 left-0 h-20 w-full bg-black z-10">
            <nav className="relative flex justify-between items-center h-full mx-8">
                <Link href="/">
                    <Image
                        src="/icons/user_registration_icon.svg"
                        width={70}
                        height={50}
                        style={{
                            height: "auto",
                        }}
                        alt="Icon"
                    />
                </Link>

                <button
                    type="button"
                    onClick={() => setShowPopup(!showPopup)}
                    className="sm:hidden"
                >
                    <FiMoreVertical className="absolute top-6 right-0 w-8 h-8 text-white z-10" />
                </button>

                <ul className="hidden sm:flex gap-8 text-white text-xl font-semibold">
                    <li>
                        <Link href="/cadastro">
                            Cadastro
                        </Link>
                    </li>
                    <li>
                        <Link href="/usuarios">
                            Usuários
                        </Link>
                    </li>
                </ul>

                {
                    showPopup && (
                        <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 backdrop-blur-sm'>
                            <ul className="absolute top-16 right-10 flex flex-col gap-2 bg-white text-black text-xl font-bold p-4 rounded-md blur-0">
                                <li onClick={() => setShowPopup(false)}>
                                    <Link href="/cadastro">
                                        Cadastro
                                    </Link>
                                </li>
                                <li onClick={() => setShowPopup(false)}>
                                    <Link href="/usuarios">
                                        Usuários
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </nav>
        </header>
    );
};

export default Header;
