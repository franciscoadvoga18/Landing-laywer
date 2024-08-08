import Link from "next/link"
import MaxWidthWrapper from "./MaxWidth"
import { Button } from "@/components/ui/button"

export const Hero = () => {
    return (
        <main id="inicio" className="lg:bg-bg-hero bg-no-repeat object-cover bg-bg-mobile bg-right-top bg-cover min-h-screen lg:min-h-[calc(100vh-100px)] h-full w-full lg:bg-center">
            <MaxWidthWrapper className="min-h-screen lg:px-8 flex lg:items-center lg:justify-start relative">
                <div className="uppercase grid place-content-center">
                    <h2 className="text-white text-base lg:text-xl my-2 lg:my-4 font-bold">Bem-vindo ao meu escritório virtual</h2>
                    <h1 className="text-white text-lg lg:text-3xl text-left font-normalidad-bold">
                        Seja qual for o desafio legal,<br></br> estamos aqui para representar <br></br>você com integridade e competência.
                    </h1>
                    <Button className="bg-red-500 py-8 max-w-xs" asChild>
                        <Link href="https://wa.me/5584991680607" className="lg:text-sm text-xs flex flex-col font-normalidad-bold items-start justify-center mt-6 lg:mt-10">
                            <p className="text-white">Marque sua consulta</p>
                            <p className="text-white text-xs">(84) 99168-0607</p>
                        </Link>
                    </Button>
                </div>
                
            </MaxWidthWrapper>
        </main>
    )
}