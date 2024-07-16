import Image from "next/image"
import MaxWidthWrapper from "./MaxWidth"
import {motion} from "framer-motion"
export const About = () => {
    return (
        <section id="sobre" className="bg-neutral-100 lg:min-h-screen lg:grid lg:place-content-center">
            <MaxWidthWrapper>
                <div className="flex items-center lg:flex-row flex-col justify-between w-full">  
                    <div className="flex items-center justify-center lg:items-start lg:justify-start flex-col">
                        <h2 className="text-lg lg:text-3xl font-normalidad-bold">Sobre mim</h2>
                        <div className="h-1 w-20 bg-red-500 my-8"></div>
                        <p className="max-w-prose">Olá! Sou Francisco de Assis, advogado com 29 anos, casado e dedicado à prática jurídica desde 2015. Minha paixão pelo Direito começou na universidade, onde me formei em 2019, e desde então, tenho me empenhado em construir uma carreira sólida e diversificada.</p>
                        <div className="flex items-center justify-center lg:items-start lg:justify-start gap-4 mt-8">
                            <div className="bg-white px-4 py-6 flex flex-col items-center justify-center shadow-sm">
                                <p className="text-red-500 font-bold text-2xl">250</p>
                                <p className="font-montserrat font-light text-black/90">Clientes felizes</p>
                            </div>
                            <div className="bg-white px-4 py-6 flex flex-col items-center justify-center shadow-sm">
                                <p className="text-red-500 font-bold text-2xl">250</p>
                                <p className="font-montserrat font-light text-black/90">Casos vencidos</p>
                            </div>
                        </div>
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