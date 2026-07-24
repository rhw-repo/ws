import './App.css';

interface WelcomeProps {
    name: string; 
    alias?: string
}

const Welcome = ( {name, alias}: WelcomeProps ) => {
    return (
        <h2>Welcome, {name} a.k.a {alias}!</h2>
    )
}

export default Welcome;