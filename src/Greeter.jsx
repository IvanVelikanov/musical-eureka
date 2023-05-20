export default function Greeter({ person = "everyone", from = "anonymous" }) {
    return (
        <>
            <h1>Howdy, {person}!</h1>
            <h2>~ from {from} ~</h2>
        </>
    )
}