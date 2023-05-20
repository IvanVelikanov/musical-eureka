export default function ListPicker({ values }) {
    const randInd = Math.floor(Math.random() * 3);
    return (
        <div>
            <p>The list of values is: {values}</p>
            <p>Randomly selected: {values[randInd]}</p>
        </div>
    )
}