function samplePromise() {
  return Promise.resolve("Gibran");
}

const name = await samplePromise();
console.info(name);
