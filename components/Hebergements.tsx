
const Hebergements: React.FC<{}> = ({ }) => {

    return (
        <div className="container mx-auto">
            <div className="section w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
                <h2 tabIndex={0}
                    className="heading">
                    Hebergements</h2>
                <p tabIndex={0}
                    className="focus:outline-none text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">
                    Découvrez nos chambes et appartements meublées ci-dessous
                </p>
            </div>

            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">

                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img role="presentation" className="object-cover w-full rounded h-64 dark:bg-gray-500" src="/IMG_4677.jpg" />
                            <div className="py-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Chambre ventillée </h3>
                                <span className="text-md dark:text-gray-400">13 000 FCFA</span>
                                <div className="flex">
                                    {
                                        ["Eaux chaude", "Ventillée"].map(title => <p key={title} className="p-2 text-white bg-gray-700 m-1 rounded">{title}</p>)
                                    }
                                </div>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img role="presentation" className="object-cover w-full rounded h-64 dark:bg-gray-500" src="/IMG_4684.jpg" />
                            <div className="py-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Appartement</h3>
                                <span className="text-md dark:text-gray-400">17 000 FCFA</span>
                                <div className="flex">
                                    {
                                        ["Eaux chaude", "Climatisée"].map(title => <p key={title} className="p-2 text-white bg-gray-700 m-1 rounded">{title}</p>)
                                    }
                                </div>
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                            <img role="presentation" className="object-cover w-full rounded h-64 dark:bg-gray-500" src="/IMG_4769.jpg" />
                            <div className="py-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Chambre Haut Standing</h3>
                                <span className="text-md dark:text-gray-400">20 000 FCFA</span>
                                <div className="flex">
                                    {
                                        ["Eaux chaude", "Climatisée"].map(title => <p key={title} className="p-2 text-white bg-gray-700 m-1 rounded">{title}</p>)
                                    }
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* <div className="flex justify-center">
                        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
                    </div> */}
                </div>
            </section>

            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto p-6 overflow-x-auto">
                    <table className="w-full">
                        <caption className="sr-only">Pricing plan comparison</caption>
                        <thead>
                            <tr>
                                <th></th>
                                <th scope="col">
                                    <h2 className="px-2 text-lg font-medium">Chambre ventillée avec eaux chaude</h2>
                                    <p className="mb-3">
                                        <span className="text-2xl font-bold sm:text-4xl dark:text-gray-50">13 000 FCFA</span>
                                        <span className="font-medium dark:text-gray-400">/jour</span>
                                    </p>
                                </th>
                                <th scope="col">
                                    <h2 className="px-2 text-lg font-medium">Appartement</h2>
                                    <p className="mb-3">
                                        <span className="text-2xl font-bold sm:text-4xl dark:text-gray-50">17 000 FCFA</span>
                                        <span className="font-medium dark:text-gray-400">/jour</span>
                                    </p>
                                </th>
                                <th scope="col">
                                    <h2 className="px-2 text-lg font-medium">Chambre Haut Standing</h2>
                                    <p className="mb-3">
                                        <span className="text-2xl font-bold sm:text-4xl dark:text-gray-50">XAF 20 000</span>
                                        <span className="font-medium dark:text-gray-400">/jour</span>
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="space-y-6 text-center divide-y divide-gray-700">
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">Zone habitable</h3>
                                </th>
                                <td>
                                    <span className="block text-sm">9-12m²</span>
                                </td>
                                <td>
                                    <span className="block text-sm">12-15m²</span>
                                </td>
                                <td>
                                    <span className="block text-sm">15-20m²</span>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">Parking Sécurisée</h3>
                                </th>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">Calme</h3>
                                </th>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">Wifi</h3>
                                </th>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">Canal sat</h3>
                                </th>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">ventillée</h3>
                                </th>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Free plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">Climatisée</h3>
                                </th>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Free plan" className="w-5 h-5 mx-auto dark:text-gray-600">
                                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                            </tr>

                            {/* <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">Veniam suscipiantur</h3>
                                </th>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Free plan" className="w-5 h-5 mx-auto dark:text-gray-600">
                                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Standard plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">Ornatus tacimates</h3>
                                </th>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Free plan" className="w-5 h-5 mx-auto dark:text-gray-600">
                                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Standard plan" className="w-5 h-5 mx-auto dark:text-gray-600">
                                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3">Aliquam fastidii in mei</h3>
                                </th>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Free plan" className="w-5 h-5 mx-auto dark:text-gray-600">
                                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not included in Standard plan" className="w-5 h-5 mx-auto dark:text-gray-600">
                                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                                <td>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Included in Premium plan" className="w-5 h-5 mx-auto dark:text-violet-400">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </td>
                            </tr> */}
                            <tr>
                                <th scope="row" className="text-left">
                                    <h3 className="py-3"></h3>
                                </th>
                                {
                                    ["Réserver", " Réserver", "Réserver "].map(title => (
                                        <td key={title} className="">
                                            <p key={title} className="p-2 py-4 text-white bg-red-400 m-1 mt-4 rounded w-64 text-center mx-auto">{title}</p>
                                        </td>
                                    ))
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>


            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 mt-8">
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                    <img role="presentation" className="object-cover w-full rounded h-64 dark:bg-gray-500" src="https://source.unsplash.com/random/720x360?1" />
                    <div className="py-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Appartements meublée </h3>
                        <span className="text-md dark:text-gray-400">15 000 FCFA</span>
                        <div className="flex">
                            {
                                ["Connexion Wifi", "Climatisation"].map(title => <p key={title} className="p-2 text-white bg-gray-700 m-1 rounded">{title}</p>)
                            }
                        </div>
                        <ul className="flex-1 mb-6 dark:text-gray-400">
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>1 Chambre</span>
                            </li>
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>2 Salles de bains</span>
                            </li>
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>1 Cuisine + Balcons</span>
                            </li>
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>100m² habitables</span>
                            </li>
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Canal Sat</span>
                            </li>
                        </ul>
                        <td className="">
                            <p className="p-2 py-4 text-white bg-red-400 m-1 mt-4 rounded w-64 text-center mx-auto">Réserver</p>
                        </td>
                    </div>
                </a>
                <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
                    <img role="presentation" className="object-cover w-full rounded h-64 dark:bg-gray-500" src="https://source.unsplash.com/random/720x360?2" />
                    <div className="py-6 space-y-2">
                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Appartement</h3>
                        <span className="text-md dark:text-gray-400">25 000 FCFA</span>
                        <div className="flex">
                            {
                                ["Connexion Wifi", "Climatisée"].map(title => <p key={title} className="p-2 text-white bg-gray-700 m-1 rounded">{title}</p>)
                            }
                        </div>
                        <ul className="flex-1 mb-6 dark:text-gray-400">
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>2 Chambres</span>
                            </li>
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>3 Salles de bains</span>
                            </li>
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>2 Cuisine</span>
                            </li>
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>100m² habitables</span>
                            </li>
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Canal Sat</span>
                            </li>
                        </ul>
                        <td className="">
                            <p className="p-2 py-4 text-white bg-red-400 m-1 mt-4 rounded w-64 text-center mx-auto">Réserver</p>
                        </td>
                    </div>
                </a>
            </div>

        </div>
    )
}


export default Hebergements