import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 h-20 w-full bg-black z-10">
            <nav className="flex justify-between items-center h-full mx-8">
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

                <ul className="flex gap-8 text-white text-xl font-semibold">
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
            </nav>
        </header>
    );
};

export default Header;
