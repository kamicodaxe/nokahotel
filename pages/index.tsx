import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from "react"
import CTA from '../components/CTA'
import DonutPromo from '../components/DonutPromo'
import GalleryModal from '../components/GalleryModal'
import Hebergements from '../components/Hebergements'
import HomeHeader from '../components/HomeHeader'
import Layout from '../components/Layout'

const Home: NextPage<[]> = ({ }) => {
  const { locale } = useRouter()
  const title = "Hotel Noka - Software development experts, we make the world a better place for you."
  const desc = "Hotel Noka - Software development experts, we make the world a better place for you."

  const [onOpenModal, setOnOpenModal] = useState(false)
  const [initialSlide, setInitialSlide] = useState(0)

  function openModal(slideIndex: number) {
    setOnOpenModal(true)
    setInitialSlide(slideIndex)
  }
  return (
    <Layout locale={locale as string} title={title} desc={desc}>
      <HomeHeader locale={locale as string} active="home" />
      <Hebergements />
      <CTA />
      {/* <Services /> */}

      <section className="py-16 dark:bg-coolGray-800 dark:text-coolGray-50" id="galerie">
        <div className="space-y-2 text-center  wow slideInRIght">
          <h2 className="text-3xl font-bold font-serif wow slideInDown">Galerie</h2>
          {/* <audio controls id="audio2" className="mx-auto">
            <source src="/sounds/soul_makossa_manu_dibango.mp3" type="audio/mp3" />
          </audio>
          <p>(Song: Manu Dibango - Soul Makossa)</p> */}
        </div>
        <div className="grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <GalleryModal
            initialSlide={initialSlide}
            onOpenModal={onOpenModal}
            onCloseModal={() => setOnOpenModal(false)}
            images={['/IMG_4849.jpg', '/images2/res-20220327-WA0023.jpg', "/images2/gallery-1.jpg", "/IMG_4892.jpg", "/images2/gallery-5.jpg"]}
          >
            <img onClick={() => openModal(0)} src="/IMG_4849.jpg" alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-coolGray-500 aspect-square" />
            <img onClick={() => openModal(1)} alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square wow fadeInLeft"
              src='/images2/res-20220327-WA0023.jpg' />
            <img onClick={() => openModal(2)} alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square wow fadeInDown"
              src="/images2/gallery-1.jpg" />
            <img onClick={() => openModal(3)} alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square wow fadeInLeft"
              src="/IMG_4892.jpg" />
            {/* <img onClick={() => openModal(4)} alt=""
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-coolGray-500 aspect-square wow fadeInUp"
              src="/images2/gallery-5.jpg" /> */}
          </GalleryModal>

        </div>
      </section>


      <section className="bg-gray-800 dark:bg-coolGray-800 dark:text-coolGray-100 mb-8 skew-y-6 py-8">
        <div
          className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:py-8 md:px-10 lg:px-32 xl:max-w-3xl -skew-y-6">
          <p className="text-center mb-6 font-bold text-4xl text-white wow slideInDown">Paramount Pictures Presentes NOKA HOTEL
          </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/O5O7VOA_hhs" title="YouTube video player"
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </section>

      <DonutPromo />

      <section className="pb-48 pt-16">
        <div className="container px-4 mx-auto font-bold text-4xl wow slideInDown">
          <p className="text-center font-serif">Les partenaires</p>
        </div>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -m-4">
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="py-4 wow zoomIn">
                <img className="h-auto mx-auto" src="images2/logos/logo-1.jpeg" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="py-4 wow zoomIn">
                <img className="h-32 mx-auto" src="images2/logos/logo-2.png" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="py-4 wow zoomIn">
                <img className="h-auto mx-auto" src="images2/logos/logo-3.png" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="py-4 wow zoomIn">
                <img className="h-auto mx-auto" src="images2/logos/logo-4.png" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="py-4 wow zoomIn">
                <img className="h-auto mx-auto" src="images2/logos/logo-6.svg" alt="Bogital logo" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="py-4 wow zoomIn">
                <img className="h-auto mx-auto" src="images2/logos/logo-5.jpg" alt="" />
              </div>
            </div>
            {/* <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="py-4 wow zoomIn">
                <img className="h-32 mx-auto" src="images/logos/polytech.jpg" alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="py-4 wow zoomIn">
                <img className="h-32 mx-auto" src="images/logos/ub.jpg" alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font ">
        {/* <div className="container px-4 mx-auto font-bold text-4xl wow slideInDown">
          <p className="text-center font-serif">Réservations</p>
        </div> */}

        <div className=" relative">
          <div className="absolute inset-0 bg-gray-300">
            <iframe width="100%" height="100%" frameBorder="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15922.866958149552!2d11.4925823!3d3.870812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf09a4e8a43b%3A0x8e341a5d86b343ba!2sNoka%20Hotel!5e0!3m2!1sfr!2scm!4v1681799812059!5m2!1sfr!2scm" ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Réservations</h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Veuillez remplir le formulaire de réservation pour réserver votre séjour parmi nous.
              </p>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Nom(s) & Prénom(s)</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Téléphone</label>
                <input type="phone" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Chambre</label>
                <select name="" id="" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'>
                  <option value="ch1">Chambre ventillée avec eaux chaude (13 000 FCFA) </option>
                  <option value="ch2">Appartement (17 000 FCFA) </option>
                  <option value="ch3">Chambre Haut Standing (20 000 FCFA) </option>
                </select>
              </div>

              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">date d&apos;arriver</label>
                <input type="date" name="departure" id="" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />

              </div>

              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Date de départ</label>
                <input type="date" name="departure" id="" className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
              </div>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Message</label>
                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
              <button className="text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Réserver</button>
            </div>
          </div>
        </div>


      </section>

    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  // const apolloClient = getApolloClient()
  // const data = await apolloClient.query({
  //   query: gql`
  //   query AllHomePageData($language: LanguageCodeFilterEnum = ${context.locale?.toUpperCase()}) {
  //     projects(where: {language: $language}, first: 4) {
  //       edges {
  //         node {
  //           projectId
  //           slug
  //           uri
  //           title(format: RENDERED)
  //           featuredImage {
  //             node {
  //               altText
  //               caption
  //               title(format: RAW)
  //               sourceUrl(size: MEDIUM)
  //             }
  //           }
  //         }
  //       }
  //     }
  //     posts(where: {language: $language}, first: 4) {
  //       edges {
  //         node {
  //           postId
  //           slug
  //           uri
  //           title(format: RENDERED)
  //           featuredImage {
  //             node {
  //               altText
  //               caption(format: RAW)
  //               sourceUrl(size: MEDIUM)
  //             }
  //           }
  //           excerpt
  //         }
  //       }
  //     }
  //   }
  //   `
  // }) as unknown as IHomePageData

  return {
    props: {
      // ...data,
      revalidate: process?.env?.REVALIDATE_TIMEOUT || 0
    }
  }
}


export default Home
