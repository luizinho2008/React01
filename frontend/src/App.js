import './App.css';
import Menu from './Menu';
import Form from './Form';

function App() {
    return (
        <div>
            <Menu></Menu>
            <h1>Cadastre uma Árvore para contribuir com o nosso projeto</h1>
            <img src='https://portal.cmp.ifsp.edu.br/images/galeria/cg_1.jpeg' id='campus'></img>
            <Form></Form>
        </div>
    );
}

export default App;
