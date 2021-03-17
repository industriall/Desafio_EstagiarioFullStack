import React from 'react';

const OccForm = () => {
    return (
        
        <div>
            <h1>Formulário de Ocorrência</h1>
            
            <div class="row">
                <form class="col s12">
                    <div class="input-field col s6">
                        <input id="occ_title" type="text" class="validate"/>
                        <label class="active" for="occ_title">Título da Ocorrência</label>
                    </div>
                    
                    <div class="input-field col s3">
                        <input id="start_date" type="text" class="validate"/>
                        <label class="active" for="start_date">Início</label>
                    </div>

                    <div class="input-field col s3">
                        <input id="end_date" type="text" class="validate"/>
                        <label class="active" for="end_date">Fim</label>
                    </div>

                    <h6>Acontecimentos</h6>

                    <div class="input-field col s9">
                        <input id="occurrence_text" type="text" class="validate"/>
                        <label class="active" for="occurrence_text">Acontecimento</label>
                        <button>ADICIONAR</button>
                    </div>

                    {/* botar aqui lista de acontecimentos */}

                </form>
            </div>
            
        </div>
    )
}

export default OccForm;