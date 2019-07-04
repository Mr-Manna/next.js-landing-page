import Link  from 'next/link';

const Test = ()=>(
    <div>
    <h2>A test page!</h2>
    <p> this page is for testing purpose only!!</p>
    <Link href="about"><a>Home</a></Link>
    </div>
)

export default Test;