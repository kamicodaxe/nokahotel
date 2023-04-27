import NavBar from "./NavBar"

interface Props {
    active: string
    locale: string
}

const HomeHeader: React.FC<Props> = ({ active, locale }) => {
    return (
        <header className="bg-cover bg-coolGray-800 text-coolGray-100  bg-[url('/IMG_4894s.jpg')] relative bg-fixed">
            {/* <div className="bg-gray-700 absolute top-0 left-0 skew-y-6 translate-y-36 w-full"></div> */}
            <div className="bg-gray-900 opacity-50 absolute bottom-0 left-0 top-0 right-0"></div>
            <NavBar active={active} locale={locale} />
            <section className="text-gray-800">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-7xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-3xl text-white z-10">
                        Decouvrez l&apos;hotel le plus calme de la ville de Yaounde, <br />  <br />
                        <span className="text-white text-6xl" style={{ letterSpacing: '16px' }}>Noka Hotel</span>
                    </h1>
                    <span className="block text-2xl text-peru-800 text-[#cba135] p-2 mt-2 font-caligraphic z-10">Propreté - Calme -
                        Sécurité</span>
                    <p className="px-8 mt-8 mb-12 text-lg leading-8 z-10 text-white">
                        Vous recherchez un hôtel dans la ville de Yaoundé, nous mettons à votre disposition à 5 minutes du centre-ville dans un environnement calme, discret et propre 18 chambres haut standing et 2 appartements climatisées avec eaux chaude à des prix défiants toutes concurrences.
                    </p>
                    {/* <p className="px-8 mt-8 mb-12 text-lg leading-8 z-10 text-white">
                        Bienvenue à l'hôtel Noka ! Si vous cherchez un endroit pour séjourner à Yaoundé, nous avons tout ce qu'il vous faut. Situé à seulement 5 minutes du centre-ville, notre hôtel vous offre un environnement calme, discret et impeccablement propre. Nous proposons 18 chambres haut de gamme et 2 appartements climatisés avec eau chaude, le tout à des prix très compétitifs. Réservez dès maintenant pour un séjour inoubliable dans notre établissement de choix à Yaoundé.
                    </p> */}
                    <div className="flex flex-wrap justify-center z-10">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-red-400 text-gray-100">Réservation</button>
                        <button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-50">Hebergements</button>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default HomeHeader