import { useEffect, useState } from 'react'
import vitoria from '../images/vitoria.png'

import Words from '../Data/Words'
import Getstatus from '../Data/GetStatus'

import '../Styles/Game.scss'

function Game(){

    const letras = 'abcdefghijklmnopqrstuvwxyz'.split('')

    const [letrasSelecionadas, setLetrasSelecionadas] = useState([])
    const [erros, setErros] = useState(0)
    const [data, setData] = useState(null)
    const [acertos, setAcertos] = useState([])
    const maxErros = 4
    const [gameStatus, setGameStatus] = useState('ativo')

    useEffect(()=>{
        function pegarPalavra(){
            const ix = Math.floor(Math.random() * Words.length)
            setData(Words[ix-1])
            return data
        }
        pegarPalavra()
    }, [])
    
    if(data == null) return null

    function exibirPalavra(){
        if(data.palavra.split('').every(p => acertos.includes(p))){
            setGameStatus('ganhou')
        }else return data.palavra.split('').map((l, i) => (
            <span className='secret' key={i}> { acertos.includes(l) ? l.toUpperCase() : '_' } </span>
        ))
    }

    function logica(letra){
        setLetrasSelecionadas((prev) => [...prev, letra])

        if(data.palavra.split('').every(p => acertos.includes(p))){
            setGameStatus('ganhou')
            console.log('ganhou')
        }


        if(data.palavra.includes(letra)){
            setAcertos((prev) => [...prev, letra])
        }else {
            setErros(erros + 1)
            if(erros == maxErros){
                setGameStatus('perdeu')
            }
        }
    }

    function reload() {
        window.location.reload()
    }
    
  if(gameStatus == 'ativo') {
        return (
            <div className='game-area'>
                <h1>Jogo da Forca</h1>
            <div>
                <img className='imagem' src={Getstatus[erros]} />
            </div>

            <div>
                <h1>{ exibirPalavra() }</h1>
            </div>

            <div>
                <h1>Dica: {data.dica} </h1>
            </div>

                <div className='keyboard'>
                    {
                        letras.map((l) => (
                            <button
                                key={l}
                                disabled={ letrasSelecionadas.includes(l) ? true : false }
                                onClick={() => logica(l)}
                                > {l.toUpperCase()}
                            </button>
                        ))
                    }
                </div>
            </div>
        );
    }
    else if(gameStatus == 'perdeu'){
        return (
            <div className='game-area'>
                <div>
                    <img className='imagem' src={Getstatus[erros]} />
                </div>
                <h1>Você Perdeu</h1>
                <h2>A palavra era: {data.palavra.toUpperCase()}</h2>
                <button onClick={reload} >Reiniciar</button>
            </div>
        )
    }
    else if(gameStatus == 'ganhou'){
        return (
            <div className='game-area'>
                <div>
                    <img className='imagem' src={vitoria} />
                </div>
                <div>
                    <h1>{ data.palavra.toUpperCase() }</h1>
                </div>
                <h1>Parabéns você ganhou!</h1>
                <button onClick={reload} >Reiniciar</button>
            </div>
        )
    }
}

export default Game
