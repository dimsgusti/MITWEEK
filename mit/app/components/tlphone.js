import Link from "next/link"

export default function Tlphone(){
    return(
        <main className="md:hidden">
            <div className="flex justify-center">
                <div className="flex-col">
                    <div className="flex justify-evenly items-center gap-8">
                        <Link href='#mitevent'>
                            <div className="flex items-end p-2 rounded-lg w-36 justify-center font-bold" id="bggradient12">
                                <h1 className="text-2xl">MIT</h1>
                                <h1 id="bggradient8" className="text-xl">event</h1>
                            </div>
                        </Link>
                        <div>
                            <h1>-</h1>
                        </div>
                        <div>
                            <h1 className="text-sm">Coming soon</h1>
                        </div>
                    </div>
                    <div className="flex justify-evenly items-center gap-8 mt-4">
                        <Link href='#seminarmit'>
                            <div className="flex items-end p-2 rounded-lg w-36 justify-center font-bold" id="bggradient12">
                                <h1 id="bggradient9" className="text-xl">seminar</h1>
                                <h1 className="text-2xl">MIT</h1>
                            </div>
                        </Link>
                        <div>
                            <h1>-</h1>
                        </div>
                        <div>
                            <h1 className="text-sm">Coming soon</h1>
                        </div>
                    </div>
                    <div className="flex justify-evenly items-center gap-8 mt-4">
                        <Link href='#mitpeduli'>
                            <div className="flex items-end p-2 rounded-lg w-36 justify-center font-bold" id="bggradient12">
                                <h1 className="text-2xl">MIT</h1>
                                <h1 id="bggradient10" className="text-xl">peduli</h1>
                            </div>
                        </Link>
                        <div>
                            <h1>-</h1>
                        </div>
                        <div>
                            <h1 className="text-sm">Coming soon</h1>
                        </div>
                    </div>
                    <div className="flex justify-evenly items-center gap-8 mt-4 mb-8">
                        <Link href='#mitfest'>
                            <div className="flex items-end p-2 rounded-lg w-36 justify-center font-bold" id="bggradient12">
                                <h1 className="text-2xl">MIT</h1>
                                <h1 id="bggradient11" className="text-xl">fest</h1>
                            </div>
                        </Link>
                        <div>
                            <h1>-</h1>
                        </div>
                        <div>
                            <h1 className="text-sm">Coming soon</h1>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    )
}