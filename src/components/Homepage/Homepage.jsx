import './Homepage.scss';
import imagem from '../../assets/imgs/ilustracao-capivara-homepage.svg'

function Homepage () {
    return (
        <>
            <header>s<span>Q</span>pets</header>

            <section className='conteudo'>
                <div className='ilustracao-capivara-homepage'>
                    <img className='img' src={imagem} alt="imagem da capivara" />
                </div>
                <div className='texto__ancoras__container'>
                    <p className='texto'>Alcançar seus objetivos ficou mais fácil e divertido !</p>
                    <a className='btn_cadastro'>Cadastre-se</a> <a className='btn_entrar'>Entrar</a>
                </div>
            </section>
        </>
    )
        
        
}


export default Homepage;