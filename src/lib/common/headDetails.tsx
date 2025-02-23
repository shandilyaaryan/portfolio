import Head from "next/head";

const headDetails = () => {
   return (
      <>
         <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0"
            />
            <meta
               name="keywords"
               content="Aryan Shandilya, shandilyaaryan, Web Developer"
            />
            <meta
               name="description"
               content="Web Developer | Crafting Innovative Digital Solutions | Explore My Portfolio and Skills"
            />

            {/* open graph / facebook meta tags */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://aryanshandilya.vercel.app/" />
            <meta property="og:title" content="Aryan Shandilya" />
            <meta
               property="og:description"
               content="a Web Developer | Crafting Innovative Digital Solutions | Explore My Portfolio and Skills"
            />

            {/* twitter meta tags */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta
               property="twitter:url"
               content="https://aryanshandilya.vercel.app/"
            />
            <meta property="twitter:title" content="Aryan Shandilya" />
            <meta
               property="twitter:description"
               content="a Web Developer | Crafting Innovative Digital Solutions | Explore My Portfolio and Skills"
            />

            {/* favicons */}
            <link
               rel="icon"
               type="image/png"
               sizes="512x512"
               href="/favicons/android-chrome-512x512.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="192x192"
               href="/favicons/android-chrome-192x192.png"
            />
            <link
               rel="apple-touch-icon"
               sizes="180x180"
               href="/favicons/apple-touch-icon.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="32x32"
               href="/favicons/favicon-32x32.png"
            />
            <link
               rel="icon"
               type="image/png"
               sizes="16x16"
               href="/favicons/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicons/site.webmanifest" />
         </Head>
      </>
   );
};

export default headDetails;
