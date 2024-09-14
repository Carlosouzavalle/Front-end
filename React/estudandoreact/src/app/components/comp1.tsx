export default function Comp1() {
    
    function Funcao() {
        return (
            <div className="flex bg-slate-800 text-white p-2">
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        )
    }


    const funcao = () => {
        return (
            <div className="flex bg-slate-800 text-white p-2">
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        )
    }
    
    
    
    return (
        <div>
            <Funcao />
            {funcao()}
        </div>
    )
}