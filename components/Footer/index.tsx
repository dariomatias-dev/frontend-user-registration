import { BsInstagram, BsGithub, BsTelephone, BsTwitter } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer>
            <div className="flex justify-center bg-black text-zinc-300 py-10 px-16">
                <div className="flex flex-col mini-lg:flex-row justify-between gap-10 mini-lg:w-full">
                    <div className="flex flex-col md:items-start">
                        <h2 className="inline-block text-lg font-bold">
                            Sobre nós
                        </h2>

                        <span className="inline-block w-16 h-[2px] bg-zinc-500 my-2" />

                        <p className="w-full max-w-[400px] text-justify">
                            Eu sou um desenvolvedor Web Junior Full Stack. Esse é um
                            dos meus projetos criado visando o aperfeiçoamento de
                            minhas habilidades como programador, além da obtenção de
                            conhecimento técnico e prático.
                        </p>

                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://www.instagram.com/dariomatias_dev/"
                                target="_blank"
                                className="flex justify-center items-center w-8 h-8 bg-zinc-900 hover:bg-zinc-800 rounded-full hover:scale-110 transition duration-300"
                            >
                                <BsInstagram className="w-5 h-5" />
                            </a>

                            <a
                                href="https://github.com/dariomatias-dev/"
                                target="_blank"
                                className="flex justify-center items-center w-8 h-8 bg-zinc-900 hover:bg-zinc-800 rounded-full hover:scale-110 transition duration-300"
                            >
                                <BsGithub className="w-5 h-5" />
                            </a>

                            <a
                                href="https://twitter.com/matiasdario752/"
                                target="_blank"
                                className="flex justify-center items-center w-8 h-8 bg-zinc-900 hover:bg-zinc-800 rounded-full hover:scale-110 transition duration-300"
                            >
                                <BsTwitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col md:items-start">
                        <h2 className="inline-block text-lg font-bold">
                            Outros projetos
                        </h2>

                        <span className="inline-block w-16 h-[2px] bg-zinc-500 mt-2 mb-3" />

                        <div className="flex flex-col gap-5">
                            <p className='max-w-[400px] text-justify'>
                                Acesse o meu portfólio para conhecer outros dos meus projetos.
                            </p>

                            <a
                                href="https://portfolio-dariomatias-dev.vercel.app/"
                                target="_blank"
                                className="flex justify-center items-center w-44 h-10 bg-zinc-900 hover:bg-zinc-800 mx-auto rounded-full transition duration-500"
                            >
                                Click para acessar
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <h2 className="inline-block text-lg font-bold">
                            Entre em contato
                        </h2>

                        <span className="inline-block w-16 h-[2px] bg-zinc-500 mt-2 mb-3" />

                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-4">
                                <BsTelephone className="w-6 h-6" />
                                <p>(+55) 83 98640-4371</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <HiLocationMarker className="w-6 h-6" />
                                <p>Areial PB, Brasil</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <MdEmail className="w-6 h-6" />
                                <p>matiasdario75@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center h-12 bg-[#0a0a0a] text-xs sm:text-sm text-zinc-400">
                Copyright ©2023 | Criado por Dário Matias
            </div>
        </footer>
    );
};

export default Footer;
