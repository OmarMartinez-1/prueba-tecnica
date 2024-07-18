import carrucel from "../assets/Parade.png"
import video from "../assets/Video.png"
import clienteCero from "../assets/Cliente Cero.png"
import vMatrix from "../assets/vMatrix.png"
import { useEffect, useRef } from "react"

function Main() {


    const scrollRef = useRef(null)

    const carrocelRef = useRef(null)

    useEffect(()=>{

        carrocelRef.current.scrollTo(1310,0)

    })
   

    return (
        <div className="w-full  ">

            <div className="flex h-full flex-col items-center pt-32 pb-12 heroBg">

                <div className="flex gap-4 text-4xl ">
                    <div className="flex gap-3 flex-col text-gray-500 flex-1 font-bold text-right">

                        <p className="">1</p>
                        <p className="">30</p>
                        <p className="">1,000</p>

                    </div>
                    <div className="flex gap-3 flex-col flex-1 font-normal text-white">

                        <p className="">Computadora</p>
                        <p className="">Usuarios</p>
                        <p className="">Posibilidades</p>


                    </div>

                </div>


                <div className=" w-full  mt-8  overflow-x-scroll carrucel " ref={carrocelRef}>

                    <div  className="w-[4050px] h-full ">
                        <img  src={carrucel} alt="carrucel" className="object-fill" />
                    </div>


                </div>


                <button onClick={()=>{scrollRef.current.scrollIntoView({ behavior: "smooth", block: "nearest",  })}} className="bg-sky-400 text-white rounded-md text-sm font-bold mt-1 p-1 px-4">DESCUBRE CÓMO</button>


            </div>

            <div className="mx-12 m-8 md:w-[70%] md:text-center md:mx-auto" >
                <h1 className="text-3xl font-semibold text-center mb-3">¿Qué es vCloudPoint?</h1>
                <p className="text-lg">Es una red de terminales que permite a múltiples usuarios el aprovechamiento efectivo y simultáneo de los recursos no explotados de una PC.</p>
            </div>

            <div className="rounded-md shadow-md border-t-2 border-gray-50 md:mx-12 " ref={scrollRef}>
                <img src={video} className="h-full" />
            </div>

            <div className="size-full  flex flex-col md:flex-row justify-between md:px-12">


                <div className="mx-12 m-8 flex-1 ">
                    <h2 className="text-2xl font-semibold ">Cliente Cero V1</h2>
                    <p className="text-lg mb-2">Dispositivo de Hardware de vCloudPoint</p>
                    <div className="rounded-sm  mb-3 border-t-2 border-gray-50">
                        <img src={clienteCero} className="h-full" />
                    </div>
                    <p className="text-lg mb-2">El Cliente Cero de vCloudPoint no contiene partes móviles y centraliza todo el procesamiento y almacenamiento en una computadora central. Como resultado, no requiere instalación de controladores, administración de parches ni licencias o cuotas de sistemas operativos locales. Este dispositivo consume muy poca energía, es resistente a la manipulación, y es incapaz de almacenar ninguna información de manera local, proveyendo una terminal más segura.</p>


                </div>


                <div className="max-md:hidden  flex-grow max-w-0  border-gray-200/50 border my-8" />

                <div className="mx-12 m-8 flex-1">
                    <h2 className="text-2xl font-semibold ">vMatrix Server Manager</h2>
                    <p className="text-lg mb-2">Dispositivo de Hardware de vCloudPoint</p>
                    <div className="rounded-sm  mb-3 border-t-2 border-gray-50">
                        <img src={vMatrix} className="h-full" />
                    </div>
                    <p className="text-lg mb-2">El software vMatrix Server Manager, ejecutado en el servidor, mejora la funcionalidad y usabilidad general del sistema compartido, ofreciendo intermediación de conexión, aceleración gráfica, redireccionamiento de audio y USB, y administración centralizada. Los administradores de IT pueden configurar, monitorear y gestionar los terminales y usuarios con simplicidad del lado del servidor a través de una consola frontal.</p>
                </div>
            </div>



        </div>
    )
}

export default Main
