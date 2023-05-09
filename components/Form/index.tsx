import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'

const defaultInputStyle = "w-full h-14 bg-transparent text-zinc-600 border border-blue-900 px-2 pt-2 rounded-lg placeholder-transparent outline-none peer focus:placeholder:text-zinc-400";
const defaultLabelStyle = "absolute top-[14px] left-2 text-zinc-400 duration-300 transform -translate-y-4 scale-[.65] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.65] peer-focus:-translate-y-4 cursor-pointer";

const Form = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

    return (
        <form className="w-full max-w-[800px] bg-white my-16 p-12 rounded-xl">
            <h1 className="text-3xl font-bold">
                Registrar novo usuário
            </h1>
            <p className="text-2xl font-medium mt-2">
                Preencha todos os campos corretamente para fazer o cadastro do novo usuário.
            </p>
            <div className=" flex flex-col gap-5 text-xl mt-8">
                <h2 className='text-gray-500 font-medium'>
                    Nome
                </h2>
                <div className="flex justify-between gap-8">
                    <div className="relative flex flex-col gap-3 w-full">
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Dário"
                            className={defaultInputStyle}
                        />

                        <label htmlFor="fullName" className="absolute top-[14px] left-2 text-zinc-400 duration-300 transform -translate-y-4 scale-[.65] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.65] peer-focus:-translate-y-4 cursor-pointer">
                            Primeiro nome
                        </label>
                    </div>

                    <div className="relative flex flex-col gap-3 w-full">
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Matias"
                            className={defaultInputStyle}
                        />

                        <label htmlFor="lastName" className="absolute top-[14px] left-2 text-zinc-400 duration-300 transform -translate-y-4 scale-[.65] z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.65] peer-focus:-translate-y-4 cursor-pointer">
                            Sobrenome
                        </label>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col gap-5 text-xl mt-8">
                <h2 className='text-gray-500 font-medium'>
                    Email
                </h2>

                <input
                    type="email"
                    placeholder="exemplo@gmail.com"
                    className="w-full h-12 bg-transparent text-zinc-600 border border-blue-900 px-2 rounded-lg outline-none"
                />
            </div>
            <div className=" flex flex-col gap-5 text-xl mt-8">
                <h2 className='text-gray-500 font-medium'>
                    Telefone
                </h2>

                <input
                    type="tel"
                    placeholder="(+55) 83 98640-4371"
                    className="w-full h-12 bg-transparent text-zinc-600 border border-blue-900 px-2 rounded-lg outline-none"
                />
            </div>
            <div className="flex flex-col gap-5 text-xl mt-8">
                <h2 className='text-gray-500 font-medium'>
                    Senha
                </h2>

                <div className="flex justify-between gap-8">
                    <div className="relative flex flex-col gap-3 w-full">
                        <input
                            type={hidePassword ? "password" : "text"}
                            id="password"
                            placeholder="••••••"
                            className={defaultInputStyle}
                        />

                        <label htmlFor="password" className={defaultLabelStyle}>
                            Senha válida
                        </label>

                        <button
                            type="button"
                            onClick={() => setHidePassword(!hidePassword)}
                            className="absolute top-[17px] right-2"
                        >
                            {
                                hidePassword ?
                                    <IoEyeOutline className="w-6 h-6 text-gray-500" />
                                    :
                                    <IoEyeOffOutline className="w-6 h-6 text-gray-500" />
                            }
                        </button>
                    </div>

                    <div className="relative flex flex-col gap-3 w-full">
                        <input
                            type={hideConfirmPassword ? "password" : "text"}
                            id="confirmPassword"
                            placeholder="••••••"
                            className={defaultInputStyle}
                        />

                        <label htmlFor="confirmPassword" className={defaultLabelStyle}>
                            Confirmar senha
                        </label>

                        <button
                            type="button"
                            onClick={() => setHideConfirmPassword(!hideConfirmPassword)}
                            className="absolute top-[17px] right-2"
                        >
                            {
                                hideConfirmPassword ?
                                    <IoEyeOutline className="w-6 h-6 text-gray-500" />
                                    :
                                    <IoEyeOffOutline className="w-6 h-6 text-gray-500" />
                            }
                        </button>
                    </div>
                </div>
            </div>

            <div className=" flex flex-col gap-5 text-xl mt-8">
                <h2 className='text-gray-500 font-medium'>
                    Data de nascimento
                </h2>

                <input
                    type="date"
                    className="w-full h-12 bg-transparent text-zinc-600 border border-blue-900 px-2 rounded-lg outline-none"
                />
            </div>
            <div className=" flex flex-col gap-5 text-xl mt-8">
                <h2 className='text-gray-500 font-medium'>
                    Cidade
                </h2>

                <div className="flex justify-between gap-8">
                    <div className="relative flex flex-col gap-3 w-full">
                        <input
                            type="text"
                            id="city"
                            placeholder="Areial"
                            className={defaultInputStyle}
                        />

                        <label htmlFor="city" className={defaultLabelStyle}>
                            Nome completo
                        </label>
                    </div>

                    <div className="relative flex flex-col gap-3 w-full">
                        <input
                            type="text"
                            id="cep"
                            placeholder="58140-000"
                            className={defaultInputStyle}
                        />

                        <label htmlFor="cep" className={defaultLabelStyle}>
                            CEP
                        </label>
                    </div>
                </div>
            </div>

            <div className=" flex flex-col gap-5 text-xl mt-8">
                <h2 className='text-gray-500 font-medium'>
                    País
                </h2>

                <div className="flex justify-between gap-8">
                    <div className="relative flex flex-col gap-3 w-full">
                        <input
                            type="text"
                            id="country"
                            placeholder="Brasil"
                            className={defaultInputStyle}
                        />

                        <label htmlFor="country" className={defaultLabelStyle}>
                            Nome completo
                        </label>
                    </div>

                    <div className="relative flex flex-col gap-3 w-full">
                        <input
                            type="text"
                            id="residence"
                            placeholder="Paraíba"
                            className={defaultInputStyle}
                        />

                        <label htmlFor="residence" className={defaultLabelStyle}>
                            Estado de residência
                        </label>
                    </div>
                </div>
            </div>

            <button type="submit" className="w-full h-12 bg-blue-500 text-white text-xl rounded-xl mt-16">
                Enviar
            </button>
        </form>
    );
};

export default Form;
