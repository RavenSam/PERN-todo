import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
   }

   render() {
      return (
         <Html>
            <Head>
               <link
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
                  rel="stylesheet"
               />
            </Head>
            <body>
               <Main />
               <NextScript />
               <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"></script>

               <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
            </body>
         </Html>
      )
   }
}

export default MyDocument
