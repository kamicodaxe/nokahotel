import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Allura&family=Cardo:ital,wght@0,400;0,700;1,400&family=Dancing+Script:wght@400;500;600;700&family=Eagle+Lake&family=Great+Vibes&family=Josefin+Sans:wght@400;500;600;700&family=Marck+Script&family=Tangerine:wght@400;700&family=Work+Sans:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument