const delay = 3000; // 1000 milliseconds (1 second) delay

// Time when setTimeout is called
const startTime = Date.now();


setTimeout(() => {
  // Time when the inner function actually runs
  const endTime = Date.now();
  const elapsedTime = endTime - startTime;

  console.log(`Expected delay: ${delay} ms`);
  console.log(`Actual delay: ${elapsedTime} ms`);
}, delay);

