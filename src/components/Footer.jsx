import perksData from "../data/mock.js"

function Footer() {
    return (
        <>

            <div className="mx-12 mt-8 mb-0 ">
                <h1 className="text-3xl font-semibold mb-4">Beneficios</h1>
                <p className="text-lg">Principales beneficios comparado con el uso de PC tradicionales.</p>
            </div>


            <div className="grid  grid-cols-2 lg:grid-cols-4 p-8 gap-6 ">

                {
                    perksData.map(({ icon, percent, saving }) => (
                        <div key={saving} className="flex flex-col p-4 bg-white shadow-md rounded-md">
                            <div className="aspect-square w-12 mb-2">
                                <img src={icon} className="h-full" />
                            </div>
                            <p className="text-3xl">{percent}</p>
                            <p className="text-xs font-bold">DE AHORRO</p>
                            <p className="text-base">{saving}</p>

                        </div>
                    ))
                }





            </div>




        </>
    )
}

export default Footer
