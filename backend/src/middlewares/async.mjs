function asyncWrapprer(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch(error) {
      return res.status(500).send({msg: error.message});
      // next(error);
    }
  }
}
export default asyncWrapprer;