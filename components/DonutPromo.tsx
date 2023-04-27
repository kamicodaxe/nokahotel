
const DonutPromo: React.FC<{}> = ({ }) => {
    return (
        <section className="p-4 md:p-8 flex container max-w-7xl mx-auto text-white">
            <div className="flex-  wow slideInDown prose md:prose-xl">
                <h3 className="font-bold text-4xl text-center font-serif text-gray-800">Noka Tour</h3>
                <p className="text-gray-600">
                    Découvrez l&apos;ouest du Cameroun cet été avec Noka Tour ! Nous vous emmènerons à la découverte de sites touristiques exceptionnels tels que Banganté, Makénéné, Tonga, le Musée de Foumban ainsi que les funérailles Bamilekes. Avec seulement 10 places disponibles, ne manquez pas cette opportunité unique de découvrir cette région incroyable.
                </p>
                <p className="text-gray-600">
                    Notre voyage vous permettra de découvrir la richesse de la culture et des traditions de l&apos;ouest du Cameroun. Vous aurez l&apos;occasion de rencontrer des gens locaux, d&apos;apprendre leur mode de vie et leur histoire fascinante. Nos guides professionnels seront à vos côtés pour vous faire découvrir ces endroits incontournables et pour répondre à toutes vos questions.
                </p>
                <p className="text-gray-600">
                    Rejoignez-nous pour une expérience de voyage unique et inoubliable. Réservez votre place dès maintenant avec Noka Tour !
                </p>
            </div>
            <div className="flex-1">
                <img className=" w-full h-full" src="/images/noka-tour.jpg" alt="" />
            </div>
        </section>
    )
}


export default DonutPromo