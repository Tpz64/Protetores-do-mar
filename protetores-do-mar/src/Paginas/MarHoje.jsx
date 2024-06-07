import ModeloInfoMarComp from "../Componentes/ModeloInfosMar/ModeloInfoMarComp"
import ModeloInfosMar from "../Componentes/ModeloInfosMar/ModeloInfosMar"

function MarHoje(){
    return(
        <>
        <section className='marHoje'>
            <div className="titulo">
                <h1>Como está o mar hoje?</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, dolorum laboriosam labore necessitatibus similique incidunt impedit veniam laborum suscipit cum voluptate molestias itaque qui consectetur amet, quibusdam quaerat autem sunt.</p>
            </div>
            <ModeloInfoMarComp/>
            <ModeloInfoMarComp/>
        </section>
        </>
    )
}

export default MarHoje
//<ModeloInfoMarComp local={} data={} temp={} ph={} sal={} vento={} change={} cor={}/> - para usar com o json
