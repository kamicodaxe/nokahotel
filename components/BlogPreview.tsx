import { motion } from "framer-motion"
import Link from "next/link"
import { useMemo } from "react"
import { IPostDataResponse } from "../lib/graphql"


interface Props {
    locale: string
    articles: IPostDataResponse[]
}

const BlogPreview: React.FC<Props> = ({ locale, articles }) => {
    console.log(articles)
    const lang = useMemo(() => (locale || '').toLowerCase().includes('fr'), [locale]) ? 'fr' : 'en'
    const s = strings[lang]

    return (
        <section className="py-6 sm:py-12 text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                    <p className="font-serif text-sm text-coolGray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        articles.map(_item => {
                            return (
                                <Link key={_item.slug} className="flex cursor-pointer" href={`/blog/${_item.slug}`}>
                                    <article className="flex flex-col cursor-pointer hover:bg-teal-400 hover:text-white bg-coolGray-900">
                                        <motion.img
                                            className="object-cover w-full h-52 bg-coolGray-500"
                                            src={_item.featuredImage.node.sourceUrl}
                                            layoutId={"image-" + _item.featuredImage.node.sourceUrl}
                                        />
                                        {/* <img alt="" className="object-cover w-full h-52 bg-coolGray-500"
                                                src={_item.image} /> */}
                                        <div className="flex flex-col flex-1 ">
                                            {/* <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a> */}
                                            {/* <span className="text-xs tracking-wider uppercase text-teal-400">{_item.author}</span> */}
                                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{_item.title}</h3>
                                            <div dangerouslySetInnerHTML={{ __html: _item.excerpt }} />
                                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-400">
                                                {/* <span>{_item.date}</span> */}
                                                {/* <span>{_item.views} views</span> */}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            )
                        })

                    }
                </div>
            </div>
        </section>
    )
}


const strings = {
    'en': {
        items: [
            {
                title: "How much will it cost me?",
                author: "Bogital",
                image: {
                    src: "/images/blog/why-website.jpg",
                    alt: ''
                },
                date: "June 3, 2020",
                views: "2.4k",
                body: "The cost depends on many factors. These factors may include; the number of pages, technologies used in the backend, hosting, private emails, design complexity, client skills etc...Write to us directly from our rapid contact form or call us(696835158) directly."
            }
        ]
    },
    'fr': {
        items: [
            {
                title: "How much will it cost me?",
                author: "Bogital",
                image: {
                    src: "/images/blog/why-website.jpg",
                    alt: ''
                },
                date: "June 3, 2020",
                views: "2.4k",
                body: "The cost depends on many factors. These factors may include; the number of pages, technologies used in the backend, hosting, private emails, design complexity, client skills etc...Write to us directly from our rapid contact form or call us(696835158) directly."
            }
        ]
    }
}


export default BlogPreview