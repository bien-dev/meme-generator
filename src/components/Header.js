export default function Header() {
    return (
        <header className="header">
            <img 
            src={require('../img/trollface.png')} 
            className="header__img"
            />
            <h2 className="header__title">Meme Generator</h2>
            <h4 className="header__subtitle">Let's have fun</h4>
        </header>
    )   
}