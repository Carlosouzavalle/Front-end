import Caixa from "@/components/Caixa";

export default function flexbox() {
    return (
        <div className="h-screen">
            <h1>Flexbox</h1>
            <div className="
                flex flex-col h-full
                justify-center  


            
            ">
                <Caixa texto="#1"/>
                <Caixa texto="#2"/>
                <Caixa texto="#3"/>
            </div>
        </div>
    )
}