import ModeloInfosMar from "./ModeloInfosMar"

function ModeloInfoMarComp({local,data,temp,ph,sal,vento,change,cor}){
    return(
        <>
        <div className="local-data">
            <h2>Localização do sensor: {local}</h2>
            <h3>Data:{data}</h3>
            <div className="dados">
                <ModeloInfosMar info="Temperatura" valor={temp} medida='Celsius'/>
                <ModeloInfosMar info="PH" valor={ph}/>
                <ModeloInfosMar info="Salinidade" valor={sal} medida="alguma"/>
                <ModeloInfosMar info="Velocidade do vento" valor={vento} medida="km/h"/>
                <ModeloInfosMar info="Mudança climatica" valor={change} medida=""/>
                <ModeloInfosMar info="Cor da agua" valor={cor} medida=""/>
            </div>
           </div>
        </>
    )
}

export default ModeloInfoMarComp