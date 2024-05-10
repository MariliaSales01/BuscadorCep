import { FiSearch} from 'react-icons/fi'
import './app.css'

export default function App() {
  return (
    <div className="container">
     <h1 className='title'>Buscador de CEP</h1>

     <div className="containerInput">
        <input type="text"
          placeholder="Digite seu cep"
        />

        <button className="buttonSearch">
          <FiSearch size={25} color= '#FFF'/>
        </button>
     </div>

     <main className='main'>
        <h2>CEP: 5965965496</h2>
        
        <span>Rua: Rua ikns</span>
        <span>Complemento: diehdiidhwo</span>
        <span>Bairro: duhniehnd</span>
        <span>Campo Grande - MS</span>
     </main>
    </div>
  );
}

