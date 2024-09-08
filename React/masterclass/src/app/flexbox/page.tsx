import Caixa from "@/components/Caixa";

export default function flexbox() {
    return (
        <div className="h-screen">
            <h1>Flexbox</h1>
            <div className="
                flex  h-full
                justify-around
                items-start
                bg-zinc-700
                gap-5
            ">
                <Caixa texto="#1" className="w-24"/>
                <Caixa texto="#2" className="flex-grow"/>
                <Caixa texto="#3"className="w-20"/>
            </div>
        </div>
    )
}