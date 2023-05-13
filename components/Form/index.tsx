import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

import { schema } from "./schema";

import FullUserDataProps from './../../@types/FullUserData';

type Props = {
    user?: FullUserDataProps;
}

type FormDataProps = yup.InferType<typeof schema>;

const defaultInputStyle = "w-full h-14 bg-transparent text-zinc-600 border border-blue-900 px-2 pt-2 rounded-lg placeholder-transparent outline-none peer focus:placeholder:text-zinc-400";
const defaultLabelStyle = "absolute top-[14px] left-2 text-zinc-400 transform -translate-y-4 scale-[.65] origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-[.65] peer-focus:-translate-y-4 cursor-pointer duration-300";

const Form = ({ user }: Props) => {
    const [errorMsg, setErrorMsg] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
    const { push } = useRouter();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormDataProps>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FormDataProps) => {
        data.date = new Date(data.date).toISOString();

        try {
            if (user)
                await fetch(`http://localhost:3333/user/${user.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
            else
                await fetch("http://localhost:3333/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
            reset({
                firstName: "",
                lastName: "",
                email: "",
                tel: "",
                password: "",
                confirmPassword: "",
                date: "",
                city: "",
                cep: "",
                country: "",
                state: "",
            });

            push("/usuarios");
        } catch (err) {
            console.log(err);
            setErrorMsg("Ocorreu algum erro.");
        }
    };

    useEffect(() => {
        if (user) {
            reset({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                tel: user.tel,
                password: user.password,
                confirmPassword: user.password,
                date: user.date,
                city: user.city,
                cep: user.cep,
                country: user.country,
                state: user.state,
            });
        }
    }, []);

    return (
        <div className="w-full h-full bg-[#F0F0F0] py-1 px-10">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[800px] bg-white mt-36 mb-16 mx-auto p-12 border-2 border-gray-00 rounded-xl">
                <h1 className="bg-white text-3xl font-bold">
                    Registrar novo usuário
                </h1>

                <p className="text-xl font-medium mt-2">
                    Preencha todos os campos corretamente para fazer o cadastro do novo usuário.
                </p>

                <div className=" flex flex-col gap-5 text-xl mt-8">
                    <h2 className="text-gray-500 font-medium">
                        Nome
                    </h2>

                    <div className="flex justify-between gap-8">
                        <div className="relative flex flex-col gap-1 w-full">
                            <input
                                type="text"
                                id="firstName"
                                placeholder="Dário"
                                {...register("firstName")}
                                className={defaultInputStyle}
                            />

                            <label htmlFor="firstName" className={defaultLabelStyle}>
                                Primeiro nome
                            </label>

                            <span className="text-red-500 text-sm">
                                {errors.firstName?.message}
                            </span>
                        </div>

                        <div className="relative flex flex-col gap-1 w-full">
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Matias"
                                {...register("lastName")}
                                className={defaultInputStyle}
                            />

                            <label htmlFor="lastName" className={defaultLabelStyle}>
                                Sobrenome
                            </label>

                            <span className="text-red-500 text-sm">
                                {errors.lastName?.message}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="text-xl mt-8">
                    <h2 className="text-gray-500 font-medium">
                        Email
                    </h2>

                    <input
                        type="email"
                        placeholder="exemplo@gmail.com"
                        {...register("email")}
                        className="w-full h-12 bg-transparent text-zinc-600 border border-blue-900 mt-5 px-2 rounded-lg outline-none"
                    />

                    <span className="text-red-500 text-sm mt-1">
                        {errors.email?.message}
                    </span>
                </div>

                <div className="text-xl mt-8">
                    <h2 className="text-gray-500 font-medium">
                        Telefone
                    </h2>

                    <input
                        type="tel"
                        placeholder="(+55) 83 98640-4371"
                        {...register("tel")}
                        className="w-full h-12 bg-transparent text-zinc-600 border border-blue-900 mt-5 px-2 rounded-lg outline-none"
                    />

                    <span className="text-red-500 text-sm mt-1">
                        {errors.password?.message}
                    </span>
                </div>

                <div className="flex flex-col gap-5 text-xl mt-8">
                    <h2 className="text-gray-500 font-medium">
                        Senha
                    </h2>

                    <div className="flex justify-between gap-8">
                        <div className="relative flex flex-col gap-3 w-full">
                            <input
                                type={hidePassword ? "password" : "text"}
                                id="password"
                                placeholder="••••••"
                                autoComplete="off"
                                {...register("password")}
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

                            <span className="text-red-500 text-sm">
                                {errors.password?.message}
                            </span>
                        </div>

                        <div className="relative flex flex-col gap-1 w-full">
                            <input
                                type={hideConfirmPassword ? "password" : "text"}
                                id="confirmPassword"
                                placeholder="••••••"
                                autoComplete="off"
                                {...register("confirmPassword")}
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

                            <span className="text-red-500 text-sm">
                                {errors.confirmPassword?.message}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="text-xl mt-8">
                    <h2 className="text-gray-500 font-medium">
                        Data de nascimento
                    </h2>

                    <input
                        type="date"
                        {...register("date")}
                        className="w-full h-12 bg-transparent text-zinc-600 border border-blue-900 mt-5 px-2 rounded-lg outline-none"
                    />

                    <span className="text-red-500 text-sm mt-1">
                        {errors.date?.message}
                    </span>
                </div>

                <div className=" flex flex-col gap-5 text-xl mt-8">
                    <h2 className="text-gray-500 font-medium">
                        Cidade
                    </h2>

                    <div className="flex justify-between gap-8">
                        <div className="relative flex flex-col gap-1 w-full">
                            <input
                                type="text"
                                id="city"
                                placeholder="Areial"
                                {...register("city")}
                                className={defaultInputStyle}
                            />

                            <label htmlFor="city" className={defaultLabelStyle}>
                                Nome completo
                            </label>

                            <span className="text-red-500 text-sm">
                                {errors.city?.message}
                            </span>
                        </div>

                        <div className="relative flex flex-col gap-1 w-full">
                            <input
                                type="text"
                                id="cep"
                                placeholder="58140-000"
                                {...register("cep")}
                                className={defaultInputStyle}
                            />

                            <label htmlFor="cep" className={defaultLabelStyle}>
                                CEP
                            </label>

                            <span className="text-red-500 text-sm mt-1">
                                {errors.cep?.message}
                            </span>
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col gap-5 text-xl mt-8 mb-16">
                    <h2 className="text-gray-500 font-medium">
                        País
                    </h2>

                    <div className="flex justify-between gap-8">
                        <div className="relative flex flex-col gap-1 w-full">
                            <input
                                type="text"
                                id="country"
                                placeholder="Brasil"
                                {...register("country")}
                                className={defaultInputStyle}
                            />

                            <label htmlFor="country" className={defaultLabelStyle}>
                                Nome completo
                            </label>

                            <span className="text-red-500 text-sm">
                                {errors.city?.message}
                            </span>
                        </div>

                        <div className="relative flex flex-col gap-3 w-full">
                            <input
                                type="text"
                                id="state"
                                placeholder="Paraíba"
                                {...register("state")}
                                className={defaultInputStyle}
                            />

                            <label htmlFor="state" className={defaultLabelStyle}>
                                Estado de residência
                            </label>

                            <span className="text-red-500 text-sm">
                                {errors.state?.message}
                            </span>
                        </div>
                    </div>
                </div>

                <span className="text-red-500 text-sm">
                    {errorMsg}
                </span>

                <button
                    type="submit"
                    className="w-full h-12 bg-blue-500 text-white text-xl rounded-md mt-2"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Form;
