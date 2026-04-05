function status(request, response) {
  response.status(200).json({ message: 'Anna Clara I love you!' });
}

 export default status;