
const CTA: React.FC<{}> = ({ }) => {

    return (
        <section className="bg-gray-800 ">
            <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">

                {/* <div className="bg-gray-700 absolute top-0 left-0 skew-y-6 translate-y-36 w-full" style={{
                    transformOrigin: "100% 100%",
                    height: "90%"
                }}></div> */}

                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center py-16">
                    <div className="">
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-3xl bg-peru-400 text-coolGray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-coolGray-50 text-white font-serif">Des chambres
                                        standard et haut
                                        standing</h4>
                                    <p className="mt-2 text-coolGray-400 text-white">L&apos;hôtel Noka disposes des chambres haut standing à des
                                        prix imbattable.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-3xl bg-peru-400 text-coolGray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-coolGray-50 text-white font-serif">Des appartements
                                    </h4>
                                    <p className="mt-2 text-coolGray-400 text-white">Vous voyagez avec votre famille ? Noka hôtel vous
                                        offres des appartements dans une cadre calme et sécurisé à Yaoundé.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-3xl bg-peru-400 text-coolGray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-coolGray-50 text-white font-serif">Un restaurant</h4>
                                    <p className="mt-2 text-coolGray-400 text-white">Notre restaurant offres les meilleurs plats de toutes
                                        les régions du Cameroun dans un cadre propre, calme et confortable.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0 ">
                        <img src="/IMG_4830.jpg" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-coolGray-500 z-50"></img>
                        {/* <div className="w-0 h-0 bg-[url('/IMG_4830.jpg')] bg-center
                        border-l-[300px] border-l-transparent
                        border-t-[600px] border-t-indigo-600
                        border-r-[300px] border-r-transparent
                        "></div>

                        <img src="/images/P2130946.JPG" alt="" className="mx-auto rounded-sm shadow-lg bg-coolGray-500 " /> */}
                    </div>
                </div>

                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center ">

                    <div aria-hidden="true" className="mt-10 lg:mt-0 ">
                        <img src="/IMG_4865.jpg" alt="" className="mx-auto rounded-sm shadow-lg dark:bg-coolGray-500 z-50"></img>
                    </div>

                    <div className="">
                        <div className="mt-12 space-y-12">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-3xl bg-peru-400 text-coolGray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-coolGray-50 text-white font-serif">
                                        Trois Parking sécurisé
                                    </h4>
                                    <p className="mt-2 text-coolGray-400 text-white">
                                        À Noka hôtel, nous disposons de trois parkings sécurisés.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-3xl bg-peru-400 text-coolGray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-coolGray-50 text-white font-serif">
                                        Salle de conférence et des banquets
                                    </h4>
                                    <p className="mt-2 text-coolGray-400 text-white">
                                        Nous pouvons accueillir des événements de mariage, conférences dans le confort et assurer jusqu&apos;à 2000 petits-déjeuners et 3000 repas pour vous.
                                    </p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-3xl bg-peru-400 text-coolGray-900">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-medium leading-6 text-coolGray-50 text-white font-serif">Wifi gratuit</h4>
                                    <p className="mt-2 text-coolGray-400 text-white">
                                        Nous vous offrons une connexion internet haut débit gratuitement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </section>
    )
}


export default CTA