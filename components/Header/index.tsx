import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 h-20 w-full bg-black">
            <nav className="flex justify-between items-center h-full mx-8">
                <Image
                    src='/icons/user_registration_icon.svg'
                    width={50}
                    height={50}
                    alt="Icon"
                    className="w-[70px]"
                />

                <ul className="flex gap-8 text-white text-xl font-semibold">
                    <li>
                        <Link href=''>
                            Cadastro
                        </Link>
                    </li>
                    <li>
                        <Link href=''>
                            Usuários
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
