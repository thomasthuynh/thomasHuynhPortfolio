const scale = 1 / 15;

const moveBackground = (event) => {
    const shapes = document.querySelectorAll('.shape');
    const x = event.clientX * scale;
    const y = event.clientY * scale;

    shapes.forEach((shape, index) => {
        const isOdd = index % 2 !== 0;
        const directionValue = isOdd ? -1 : 1;
        shape.style.transform = `translate(${x * directionValue}px, ${y * directionValue}px) rotate(${x * directionValue * 5}deg)`;
    })
}