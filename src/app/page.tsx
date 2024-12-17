import Link from "next/link";

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            Click <Link href="/documents/123">&nbsp;here&nbsp;</Link> to go to
            the documents page.
        </div>
    );
};

export default Home;
