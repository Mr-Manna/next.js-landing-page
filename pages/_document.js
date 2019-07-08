import Document , { Html, Main, Head, NextScript } from 'next/document';

class MyDocument extends Document{

    render(title){
        return(
            <Html lang="en">
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
                    <meta name="viewport" content="initial-scale=1.2, width=device-width" key="viewport"/>
                    <meta name="description" content="My NEXT App>"/>
                    <link rel="apple-touch-icon" href="icon.png"></link>
                    <link rel="apple-touch-startup-image" href="app.png"></link>

                    <link href="/YOUR_PATH/favicon.ico" rel="icon" type="image/x-icon" ></link>
                    <meta http-equiv="cleartype" content="on"/>
                    <meta name="format-detection" content="telephone=no" />
                    <meta name = "viewport" content = "width = device-width, initial-scale=1, user-scalable=yes"/>
                    <meta name="description" content="This is an example of a meta description. This will often show up in search results."/>
                    <meta name="google" content="nositelinkssearchbox" />   
                    <meta name="robots" content="..., ..." />
                    <meta name="http-equiv" content="X-Robots-Tag : noindex, follow" />
                    <meta name="googlebot" content="..., ..." />    
                    <meta name="verify" content=""/>
                    
                    <link rel="stylesheet" href="/static/main.css"></link>

                </Head>
                <Main/>
                <NextScript/>
                <script type="text/javascript" src="/static/main.js"></script>
            </Html>
        )
    }
}

export default MyDocument;