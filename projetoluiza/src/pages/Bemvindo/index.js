import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook
import './style.css';
import logo from '../../assets/images/bola.png';
import banner from '../../assets/images/brasil.png';

function BemVindo() {
    const navigate = useNavigate(); // cria a função de navegação

    return (
        <div className="pagina-bem-vindo">
            <header className="topo">
                <img src={logo} alt="Logo" className="logo" />
                <nav className="menu">
                    <a href="#beneficios">Benefícios</a>
                    <a href="#comparativo">Acessorados</a>
                    <a href="#funcionalidades">Funcionalidades</a>
                    <a href="#quem-somos">Quem somos</a>
                </nav>
            </header>

            <main className="conteudo">
                <img src={banner} alt="Banner" className="imagem-banner" />
                <h1 className="titulo">SEJA DONO DA SUA PRÓPRIA HISTÓRIA!</h1>
                <p className="descricao">
                    Não deixe mais o tempo apagar suas conquistas.<br />
                    A sua história e a do seu time merecem ser reconhecidas, valorizadas e eternizadas.
                </p>
                <div className="botoes-download">
                    <a href="#" className="botao google">📱 Google Play</a>
                    <a href="#" className="botao apple">🍎 App Store</a>
                </div>
                <div className="botoes-acesso">
                <button 
                    style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
                    onClick={() => navigate('/cadastro')}
                >
                    Ir para Cadastro
                </button>
                <button 
                    style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
                    onClick={() => navigate('/usuarios')}
                >
                    Ver usuarios Cadastrados
                </button>
                </div>
            </main>
        </div>
    );
}

export default BemVindo;
