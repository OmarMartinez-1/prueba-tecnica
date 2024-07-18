import { useEffect, useState } from "react"
import brandLogo from "../assets/vCloudPoint - Color.png"


function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    useEffect(() => {
        function handleResize() {
            let { innerWidth } = window
            if (innerWidth >= 768) setMobileMenuOpen(false)
        }
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [innerWidth])






    return (
        <div className="flex-1 mx-3 flex items-center justify-between  rounded-lg bg-white border-b border-gray-200"  >



            <div className="flex w-full   items-center justify-between m-1  " >


                <a className="ml-3" to="/">
                    <img
                        className="object-bottom w-32"
                        src={brandLogo}
                        alt="logo de vCloudPoint y boton de inicio"
                    />
                </a>



                <div className="flex flex-row gap-5">






                    {mobileMenuOpen ?
                        <div className="slide-in-right  fixed flex justify-end md:hidden inset-y-0 right-0 z-10 w-full h-[100dvh]  bg-black/50 ">
                            <button className="size-full hidden sm:block" onClick={() => setMobileMenuOpen(false)} />

                            <div className="md:hidden inset-y-0  overflow-y-scroll  w-full h-[100dvh]  bg-white px-6  pb-6 pt-9 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border">
                                <div className="flex items-center justify-end">

                                    <button
                                        type="button"
                                        className="-m-2.5 rounded-md p-2.5 pr-2 text-gray-700"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>

                                    </button>
                                </div>



                                <div className="mt-6  flow-root">
                                    <div className=" border-b border-gray-500/10 " />
                                    <div className="-my-6 h- divide-y divide-gray-500/10 ">
                                        <div className="flex flex-col gap-7 space-y-2 py-6 ">
                                            <div className="-mx-3">

                                            </div>
                                
                                            <a
                                                href="/"
                                                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                Inicio
                                            </a>
                                            <a
                                                href="/"
                                                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                                            >
                                                Productos
                                            </a>
                                            <a
                                                href="/"
                                                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                                            >
                                                Clientes
                                            </a>
                                            <a
                                                href="/"
                                                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                                            >
                                                Escenarios
                                            </a>
                                            <a
                                                href="/"
                                                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                                            >
                                                Soporte
                                            </a>
                                            <a
                                                href="/"
                                                className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                                            >
                                                Compañía
                                            </a>

                                        </div>

                                        <div className="h-full flex flex-col justify-end items-center gap-6 py-14 mt-8">


                                            <a href="/" className="h-min w-min  ">
                                                <div className="size-28">
                                                    <img src={brandLogo} alt="logo de la empresa"
                                                        className="object-contain w-full h-auto " />
                                                </div>
                                            </a>

                    

                                        </div>
                                    </div>


                                </div>


                            </div>
                        </div>
                        :
                        <button
                            type="button"
                            className=" md:hidden -m-2  rounded-md p-2.5 text-gray-700"
                            onClick={() => { setMobileMenuOpen(true) }}
                        >
                            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                            </svg>
                        </button>
                    }

                </div>


                






                <div className="hidden md:flex items-center justify-between gap-8 pr-2">
                    <a
                        href="/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                        Inicio
                    </a>
                    <a
                        href="/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                    >
                        Productos
                    </a>
                    <a
                        href="/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                    >
                        Clientes
                    </a>
                    <a
                        href="/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                    >
                        Escenarios
                    </a>
                    <a
                        href="/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                    >
                        Soporte
                    </a>
                    <a
                        href="/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-gray-500 hover:bg-gray-50"
                    >
                        Compañía
                    </a>

                </div>


                


            </div>

        </div>
    )
}

export default Header
