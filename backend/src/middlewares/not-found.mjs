const notFound  = (req, res) => res.status(404).send(`Route dosn't exist`);

export default notFound;