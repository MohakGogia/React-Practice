import logoSrc from '../assets/quiz-logo.png';

export default function Header() {
    return (
        <header>
            <img src={logoSrc} alt='app-logo' />
            <h1>React Quiz App</h1>
        </header>
    );
}