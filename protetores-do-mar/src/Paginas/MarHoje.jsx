import ModeloInfoMarComp from "../Componentes/ModeloInfosMar/ModeloInfoMarComp"

import data from "../../public/dados_sinteticos.json";

function MarHoje(){

    return(
        <>
        <section className='marHoje'>
            <div className="titulo">
                <h1>Como está o mar hoje?</h1>
                <p>Aqui você encontra o monitoramento dia a dia da cidade de Belém, no Pará. No Futuro, iremos implementar outras cidades, dando a opção de você escolher de onde quer saber as informações. </p>
            </div>

            {data.belem.map((belem,index)=>(
                <div key={index}>
                    <ModeloInfoMarComp local="Belém, Pará" data={belem.date} temp={belem.temperature} ph={belem.ph}  sal={belem.salinity}  vento={belem.wind_speed} change={belem.climate_change}  cor={belem.water_color} />
                </div>
                ))}

            <div>
                
            </div>
        </section>
        </>
    )
}

export default MarHoje
//<ModeloInfoMarComp local={} data={} temp={} ph={} sal={} vento={} change={} cor={}/> - para usar com o json
