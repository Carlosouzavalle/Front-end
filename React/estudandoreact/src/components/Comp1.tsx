import Link from "next/link"

export default function Comp1() {




    const funcao = () => {
        return (
            <div className="flex bg-slate-800 text-white ">
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        )
    }


    return (

        <div>
           
           
            {/* {funcao()} */}



        <nav className="flex justify-between items-center bg-slate-800 text-white h-[200px]"> 
            <Link href={"/"}>Home</Link>
            <Link href={"/produtos/produtos"}>produtos</Link>
            <Link href={"/teste/teste"}>teste</Link>

        </nav>







        </div>
    )
}


const teste = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'blue'
}