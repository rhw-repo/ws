import './App.css';

const Welcome = (props: { name: string; alias?: string }) => {
    console.log(props);
    return (
        <h2>Welcome, {props.name} a.k.a {props.alias!}</h2>
    )
}

export default Welcome;