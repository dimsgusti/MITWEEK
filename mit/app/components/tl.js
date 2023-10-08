import Link from "next/link"

export default function Tl(){
    return(
        <main className="w-full mt-8 hidden md:block">
            <div className="flex justify-evenly">
                <Link href='#mitevent'>
                    <div className="flex items-end font-bold p-4 rounded-lg" id="bggradient12">
                        <h1 className="text-2xl">MIT</h1>
                        <h1 id="bggradient8" className="text-xl">event</h1>
                    </div>
                </Link>
                <Link href='#seminarmit'>
                    <div className="flex items-end font-bold p-4 rounded-lg" id="bggradient12">
                        <h1 id="bggradient9" className="text-xl">seminar</h1>
                        <h1 className="text-2xl">MIT</h1>
                    </div>
                </Link>
                <Link href='#mitpeduli'>
                    <div className="flex items-end font-bold p-4 rounded-lg" id="bggradient12">
                        <h1 className="text-2xl">MIT</h1>
                        <h1 id="bggradient10" className="text-xl">peduli</h1>
                    </div>
                </Link>
                <Link href='#mitfest'>
                    <div className="flex items-end font-bold p-4 rounded-lg" id="bggradient12">
                        <h1 className="text-2xl">MIT</h1>
                        <h1 id="bggradient11" className="text-xl">fest</h1>
                    </div>
                </Link>
            </div>
            <div className="">
            <hr className="mt-4 relative" />
                <div className="flex justify-evenly">
                    <div className="p-4">
                        <h1>|</h1>
                    </div>
                    <div className="p-4">
                        <h1>|</h1>
                    </div>
                    <div className="p-4">
                        <h1>|</h1>
                    </div>
                    <div className="p-4">
                        <h1>|</h1>
                    </div>
                </div>
                <div className="flex justify-evenly">
                    <div className="p-4">
                        <h1>Coming soon</h1>
                    </div>
                    <div className="p-4">
                        <h1>Coming soon</h1>
                    </div>
                    <div className="p-4">
                        <h1>Coming soon</h1>
                    </div>
                    <div className="p-4">
                        <h1>Coming soon</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}