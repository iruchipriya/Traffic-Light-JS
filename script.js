document.addEventListener('DOMContentLoaded', function () {
  const lightDuration = {
    red: 4000,
    yellow: 500,
    green: 3000,
  };

  const nextLight = {
    red: 'green',
    yellow: 'red',
    green: 'yellow',
  };

  let currentLight = 'red';

  function switchLight() {
    // Get the current light element and its next light
    const currentLightElement = document.getElementById(currentLight);
    const nextLightName = nextLight[currentLight];
    const nextLightElement = document.getElementById(nextLightName);

    // Toggle the active class for the lights
    currentLightElement.classList.remove('active');
    nextLightElement.classList.add('active');

    // Update current light to the next one
    currentLight = nextLightName;

    // Schedule the next light change
    setTimeout(switchLight, lightDuration[currentLight]);
  }

  // Start the traffic light cycle
  switchLight();
});
