export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    return (
        <div>
            {num1 === num2 && <h2>You win!</h2 >}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
            <hr />
        </div>
    );
}

// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     return (
//         <div>
//             {num1 === num2 ? <h2>You win!</h2 > : <h3>You lose</h3 >}
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//             <hr />
//         </div>
//     );
// }

// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 3) + 1;
//     const num2 = Math.floor(Math.random() * 3) + 1;
//     // const result = num1 === num2 ? "You win!" : "You lose :("
//     return (
//         <div>
//             <h2>{num1 === num2 ? "You win!" : "You lose :("}</h2>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//             <hr />
//         </div>
//     );
// }