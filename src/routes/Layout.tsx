import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../assets/style.css"
import exp from "constants";

export default function Layout(props:{children: React.ReactNode}) {
    return (
        <>
            <Header />
            <Nav />
            <main className="main">
                { props.children }
            </main>
            <Footer />
        </>
    );
}
