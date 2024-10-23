import './Form.css';

function Form() {
    const checkForm = {
        nome: false,
        nomeCientifico: false,
        descricao: false,
        latitude: false,
        longitude: false
    };

    const isValidNome = (e) => {
        const nome = e.target.value;

        if(nome.length < 1 || nome.length > 50 || /[0-9]/.test(nome)) {
            console.log("Nome deve ter entre 1 e 50 caracteres e não conter números");
            document.getElementById("erro-nome").style.display = "block";
            document.getElementById("nome").style.border = "3px solid red";
            checkForm.nome = false;
        }
        else {
            console.log("Nome válido");
            document.getElementById("erro-nome").style.display = "none";
            document.getElementById("nome").style.border = "2px solid gray";
            checkForm.nome = true;
        }
    };

    const isValidNomeCientifico = (e) => {
        const nomeCientifico = e.target.value;

        if(nomeCientifico.length < 1 ||nomeCientifico.length > 50 || /[0-9]/.test(nomeCientifico)) {
            console.log("Nome científico deve ter entre 1 e 50 caracteres e não conter números");
            document.getElementById("erro-nomeCientifico").style.display = "block";
            document.getElementById("nomeCientifico").style.border = "3px solid red";
            checkForm.nomeCientifico = false;
        }
        else {
            console.log("Nome científico válido");
            document.getElementById("erro-nomeCientifico").style.display = "none";
            document.getElementById("nomeCientifico").style.border = "2px solid gray";
            checkForm.nomeCientifico = true;
        }
    };

    const isValidDescricao = (e) => {
        const descricao = e.target.value;

        if(descricao.length < 1 || descricao.length > 250) {
            console.log("Descrição deve ter entre 1 e 250 caracteres");
            document.getElementById("erro-descricao").style.display = "block";
            document.getElementById("descricao").style.border = "3px solid red";
            checkForm.descricao = false;
        }
        else {
            console.log("Descrição válida");
            document.getElementById("erro-descricao").style.display = "none";
            document.getElementById("descricao").style.border = "2px solid gray";
            checkForm.descricao = true;
        }
    };

    const isValidLatitude = (e) => {
        const latitude = parseFloat(e.target.value);

        if(isNaN(latitude) || latitude < -90 || latitude > 90) {
            console.log("A latitude deve ser entre -90 e 90")
            document.getElementById("erro-latitude").style.display = "block";
            document.getElementById("latitude").style.border = "3px solid red";
            checkForm.latitude = false;
        }
        else {
            console.log("Latitude válida");
            document.getElementById("erro-latitude").style.display = "none";
            document.getElementById("latitude").style.border = "2px solid gray";
            checkForm.latitude = true;
        }
    };

    const isValidLongitude = (e) => {
        const longitude = parseFloat(e.target.value);

        if(isNaN(longitude) || longitude < -180 || longitude > 180) {
            console.log("A longitude deve ser entre -180 e 180")
            document.getElementById("erro-longitude").style.display = "block";
            document.getElementById("longitude").style.border = "3px solid red";
            checkForm.longitude = false;
        }
        else {
            console.log("Longitude válida");
            document.getElementById("erro-longitude").style.display = "none";
            document.getElementById("longitude").style.border = "2px solid gray";
            checkForm.longitude = true;
        }
    };

    const url = (string) => {
        try {
            new URL(string);
            return true;
        }
        catch(erro) {
            return false;
        }
    };

    const isValidURL = (e) => {
        const linkImagem = e.target.value;

        if (!url(linkImagem)) {
            document.getElementById('erro-linkImagem').style.display = 'block';
            document.getElementById("linkImagem").style.border = "3px solid red";
            checkForm.linkImagem = false;
        }
        else {
            document.getElementById('erro-linkImagem').style.display = 'none';
            document.getElementById("linkImagem").style.border = "2px solid gray";
            checkForm.linkImagem = true;
        }
    }

    return (
        <form id='form'>
            <input type='text' id='nome' placeholder='Nome: ' onInput={isValidNome}/>
            <p id="erro-nome" class="msg-erro"> Nome deve ter entre 1 e 50 caracteres e não conter números </p>

            <input type='text' id='nomeCientifico' placeholder='Nome científico: ' onInput={isValidNomeCientifico}/>
            <p id="erro-nomeCientifico" class="msg-erro"> Nome científico deve ter entre 1 e 50 caracteres e não conter números </p>

            <input type='text' id='descricao' placeholder='Descrição: ' onInput={isValidDescricao}/>
            <p id="erro-descricao" class="msg-erro"> Descrição deve ter entre 1 e 250 caracteres </p>

            <input type='number' id='latitude' placeholder='Latitude: ' onInput={isValidLatitude}/>
            <p id="erro-latitude" class="msg-erro"> A latitude deve ser entre -90 e 90 </p>

            <input type='number' id='longitude' placeholder='Longitude: ' onInput={isValidLongitude}/>
            <p id="erro-longitude" class="msg-erro"> A longitude deve ser entre -180 e 180 </p>

            <input type='text' id='linkImagem' placeholder='Link da Imagem: ' onInput={isValidURL}/>
            <p id="erro-linkImagem" class="msg-erro"> O texto deve ser uma URL </p>

            <button type='submit' id='button' disabled>Enviar</button>
        </form>
    );
}

export default Form;
