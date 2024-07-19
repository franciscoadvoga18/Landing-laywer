import Image from "next/image"

export const Footer = () => {
    return ( 
        <footer className="bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl px-8 py-6 lg:px-0 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="/" className="flex items-center">
                        <Image src="/logobranca.png" width={100} height={100} alt="logo" />
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Menu</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#inicio" className="hover:underline">Inicio</a>
                            </li>
                            <li className="mb-4">
                                <a href="#servicos" className="hover:underline">Serviços</a>
                            </li>
                            <li className="mb-4">
                                <a href="#sobre" className="hover:underline">Sobre</a>
                            </li>
                            <li className="mb-4">
                                <a href="#contato" className="hover:underline">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-white">Siga nos</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://www.facebook.com/p/Francisco-De-Assis-Advocacia-100093988308906/?locale=pa_IN" target="_blank" rel="noopener noreferrer" className="hover:underline ">Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/franciscodeassis.advogado/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
            <div className="sm:flex sm:items-center sm:justify-center">
                <span className="text-sm text-white sm:text-center dark:text-white/70"><a target="_blank" rel="noopener noreferrer" href="https://wa.me/558498442522" className="hover:underline">Feito por Sales Digital </a>
                </span> 
            </div>
            </div>
        </footer>
    )
}