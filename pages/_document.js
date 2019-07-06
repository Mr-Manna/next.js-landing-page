import Document , { Main, Head, NextScript } from 'next/document';

class MyDocument extends Document{

    render(title){
        return(
            <html>
                <Head>
                    <meta name="description" content="My NEXT App"/>
                    <link rel="stylesheet" href="/static/main.css"></link>
                </Head>
                <Main/>
                <NextScript/>
                <script type="text/javascript" src="/static/main.js"></script>
            </html>
        )
    }
}

export default MyDocument;