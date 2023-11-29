import { A } from "@solidjs/router";

function Home() {
    return (
        <div>
            Home Page

            <ul>
                <li>
                    <A href={'/page1'} >
                        Page 1
                    </A>
                </li>
                <li>
                    <A href={'/page2'} >
                        Page 2
                    </A>
                </li>
            </ul>
        </div>
    )
}

export default Home
