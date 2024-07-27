export const Button = () => {
    const handleButtonClick = ()=>{
        console.log("button click");
    }

    return <button onClick={handleButtonClick}>Example</button>;
};
