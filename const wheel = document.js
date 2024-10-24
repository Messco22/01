const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');
let spinning = false;

spinButton.addEventListener('click', () => {
    if (spinning) return;  // Prevent multiple clicks
    spinning = true;

    // Generate a random spin duration and rotation
    const spinDuration = Math.random() * 3000 + 4000;  // between 4 and 7 seconds
    const rotation = Math.random() * 3600 + 720;  // between 720 and 4320 degrees (2 to 12 full rotations)

    // Apply CSS for spinning
    wheel.style.transition = `transform ${spinDuration / 1000}s ease-out`;
    wheel.style.transform = `rotate(${rotation}deg)`;

    // Reset after the spin is complete
    setTimeout(() => {
        spinning = false;
        wheel.style.transition = 'none';
        wheel.style.transform = `rotate(${rotation % 360}deg)`;  // Keep the wheel at the correct final angle
    }, spinDuration);
});
