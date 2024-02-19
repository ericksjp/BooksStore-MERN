class MyError extends Error {
  constructor(mensagem, codigo) {
    super(mensagem);
    this.code = codigo;
  }
}

export { MyError }