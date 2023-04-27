import Link from "next/link"
import { useRouter } from "next/router"

interface Props {
    active: string
    locale: string
}

const NavBar: React.FC<Props> = ({ active, locale }) => {
    const { locale: activeLocale, locales, asPath } = useRouter()

    const availableLocales = locales?.filter(locale => locale !== activeLocale)

    const activeLink = (routeName: string) => {
        // TODO: Use classnames from npm
        if (!active) return 'p-2 px-4 border-b-2 border-transparent text-white hover:text-teal-400 hover:border-teal-400'
        const isActive = routeName.toLowerCase().includes(active.toLowerCase())
        // isActive ? alert("Active " + routeName) : alert("Inactive " + routeName)
        if (isActive) return 'p-2 px-4 border-b-2 text-teal-400 border-teal-400'
        return 'p-2 px-4 border-b-2 border-transparent text-white hover:text-teal-400 hover:border-teal-400'
    }

    function showMenu() {
        var dropDown = document.querySelector("#drop-down");
        if (dropDown && dropDown.classList.contains("hidden")) {
            dropDown.classList.remove("hidden")
            return;
        }
    }

    function hideMenu() {
        var dropDown = document.querySelector("#drop-down");
        if (dropDown && !dropDown.classList.contains("hidden")) {
            dropDown.classList.add("hidden");
            return;
        }
    }



    return (
        <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex justify-between h-16 relative md:justify-center md:space-x-8">

                <ul className="items-stretch hidden space-x-3 z-10 md:flex">
                    <li className="flex">
                        <div className="flex items-center -mb-1 border-b-2 dark:border-transparent text-xl cursor-pointer text-white z-50">
                            <Link href="/hebergements" className="px-8">
                                Hégergements
                            </Link>
                        </div>
                    </li>
                    <li className="flex">
                        <Link href="/"
                            className="flex items-center p-2">
                            <span className="flex items-center cursor-pointer z-50">
                                <img src="/images/logo.png" alt="Bogital logo" srcSet="" className="h-32 p-4" />
                            </span>
                        </Link>
                    </li>
                    <li className="flex">
                        <div className="flex items-center -mb-1 border-b-2 dark:border-transparent text-xl cursor-pointer text-white z-50">
                            <Link href="/reservations" className="px-8">
                                Réservations
                            </Link>
                        </div>
                    </li>
                </ul>

                <button title="Button" type="button" className="z-10 md:absolute md:right-4 md:top-8" >
                    <span className="p-4 bg-red-400 rounded text-white ">
                        (+237) 698 190 802
                    </span>
                </button>

                <button title="Button" type="button" className="p-4 z-10 text-white md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

            </div>

        </header>
    )
}

export default NavBar