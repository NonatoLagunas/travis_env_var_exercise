
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const message = process.env.SERVER_MESSAGE;
  while(true) {
    console.log(message);
    await sleep(5000);
  }
}

main();
