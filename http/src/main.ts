import app from "./index";
const PORT = process.env.HTTP_PORT || 3000;

app.listen(PORT, () => console.log("Server listening on " + PORT));
