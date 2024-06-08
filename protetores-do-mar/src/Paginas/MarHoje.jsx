import ModeloInfoMarComp from "../Componentes/ModeloInfosMar/ModeloInfoMarComp"

import data from "../../public/dados_sinteticos.json";

function MarHoje(){

    return(
        <>
        <section className='marHoje'>
            <div className="titulo">
                <h1>Como está o mar hoje?</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, dolorum laboriosam labore necessitatibus similique incidunt impedit veniam laborum suscipit cum voluptate molestias itaque qui consectetur amet, quibusdam quaerat autem sunt.</p>
            </div>

            {data.belem.map((belem,index)=>(
                <div key={index}>
                    <ModeloInfoMarComp local="Belém, Pará" data={belem.date} temp={belem.temperature} ph={belem.ph}  sal={belem.salinity}  vento={belem.wind_speed} change={belem.climate_change}  cor={belem.water_color} />
                </div>
                ))}

            <div>
                
            </div>
            <ModeloInfoMarComp local="" data="" temp="" ph="" sal="" vento=""change="" cor=""/>
            <ModeloInfoMarComp/>
        </section>
        </>
    )
}

export default MarHoje
//<ModeloInfoMarComp local={} data={} temp={} ph={} sal={} vento={} change={} cor={}/> - para usar com o json
