import Image from "next/image"
import MaxWidthWrapper from "./MaxWidth"
export const About = () => {
    return (
        <section id="sobre" className="bg-neutral-100 lg:min-h-screen lg:grid lg:place-content-center">
            <MaxWidthWrapper>
                <div className="flex items-center lg:flex-row flex-col justify-between w-full">  
                    <div className="flex items-center justify-center lg:items-start lg:justify-start flex-col">
                        <h2 className="text-lg lg:text-3xl font-normalidad-bold">Sobre mim</h2>
                        <div className="h-1 w-20 bg-red-500 my-8"></div>
                        <p className="max-w-prose">A constante busca pelo aprimoramento profissional me levou a investir em minha formação contínua, participando ativamente de seminários e palestras, além de concluir pós-graduações em Direito Público, Direito Previdenciário e Direito Civil e outros. Essas experiências reforçam meu compromisso com a excelência no serviço ao cliente e a busca incessante por conhecimento.</p>
                        <p className="max-w-prose mt-4">Desde então, venho adquirindo experiências em diversas áreas do Direito.Faço parte da Comissão de Educação e Ensino Jurídico e do Direito do Trabalho, o que me permite contribuir ativamente para o desenvolvimento e aprimoramento dessas áreas, além de manter-me atualizado com as mais recentes tendências e práticas jurídicas.</p>
                    </div>
                    <div className="w-full flex items-center justify-center gap-4 lg:justify-end mt-8 lg:mt-0">
                        <div className="bg-white p-4 hidden lg:block">
                            <Image src="/perfilAssis.jpeg" width={300} height={300} alt="Assis" />
                        </div>
                        <div className="bg-white p-4">
                            <Image src="/bg-mobile.webp" width={300} height={300} alt="Assis" />
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}