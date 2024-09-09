import './index.scss';

export default function Cabecalho(){
    return(
        <header>
          <div className='cima'>
            <img className='logo' src="/assets/images/logo_freiS.png" alt="" />

            <h2 className='rir'>React FreiS</h2>
          </div>

          <div className='lado'>
            <a href="/">Inicio</a>
            <a href="/sobre">Sobre</a>
          </div>
        </header>

    )
    
}
