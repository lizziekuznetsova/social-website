

let names=["Anya Taylor-Joy", "Florence Pugh", "Olivia Cooke"]

 function Name1(){
    return(
        <div className="profile">
        <h2>{names[0]}</h2>
        </div>
    )
}

 function Name2(){
    return(
        <div className="profile">
        <h2>{names[1]}</h2>
        </div>
    )
}

 function Name3(){
    return(
        <div className="profile">
        <h2>{names[2]}</h2>
        </div>
    )
}

export{Name1, Name2, Name3}