const { json } = require("express");

function httpOK(res, data, statusCode) {
  switch (res.req.method) {
    case "POST":
    case "PUT":
      res.status(201);
      break;
    case "DELETE":
    case "GET":
      res.status(200);
      break;
  }
  if (statusCode) {
    res.status(statusCode);
  }
  if (!data) {
    return res.send();
  }
  if (typeof data === "string") {
    res.send(data);
  }
  return res.send(data);
}

module.exports = { httpOK };
