import { FiArrowDown } from "react-icons/fi";

const Home = () => {
    return (
        <>
            <div className="h-screen bg-background bg-cover bg-center bg-fixed">
                <div className="flex justify-center items-center h-full bg-black bg-opacity-60">
                    <h1 className="text-white text-4xl text-center font-bold mx-4">
                        Faça o cadastro dos usuários
                        <br />
                        e veja os dados de forma fácil
                    </h1>
                </div>
            </div>

            <div className="h-24 bg-black text-white">
                <div className="flex justify-center items-center gap-6 h-full">
                    <p className="text-lg font-semibold">
                        Ler mais
                    </p>
                    <FiArrowDown className="w-7 h-7 animate-bounce" />
                </div>
            </div>

            <div className="h-[calc(100vh+20vh)] sm:h-screen bg-objective_background bg-cover bg-center bg-fixed">
                <div className="flex justify-center h-full bg-black bg-opacity-60 text-white">
                    <div className="flex flex-col justify-center gap-4 md:gap-8 w-full max-w-[1000px] mx-10">
                        <h2 className="text-2xl sm:text-4xl font-bold">
                            Projeto cadastro
                        </h2>

                        <div className="flex flex-col text-base sm:text-lg text-justify">
                            <p>
                                Esse projeto foi criado com o objetivo de ser a primeira aplicação que coloco os meus conhecimentos de Front-end e Back-end juntos. Pode não ser uma das mais complexas e completas, mas como a intenção é treinar visando o ganho de experiência, é mais que o bastante.
                            </p>
                            <p>
                                Embora exista opções mais adequadas considerando o meu nível atual de conhecimento, prefiro começar com uma mais básica para fixar melhor o conhecimento base de toda a área de programação Web, para então ir aumentado a dificuldade.
                            </p>
                            <p>
                                Para essa situação em questão, não há melhor citação se não essa:
                            </p>
                            <q className="mt-2">
                                Um passo de cada vez, no ritmo certo, sem pressa. E quando você menos esperar, terá percorrido o mundo.
                            </q>
                            <p>
                                - Isaac Azar
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
