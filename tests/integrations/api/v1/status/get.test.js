test("GET to /api/v1/status should return  200 ", async () => { 
  // O async serve para que possamos usar o await dentro do teste,
  // e o await é usado para esperar a resposta da requisição fetch antes
  // de continuar com as asserções.
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});