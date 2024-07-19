const express = require("express");
const app = express();
app.use(express.json());

app.listen(3000, () => console.log("Server running on port 3000"));

app.get("/app/items", (res) => {
  res.send("List of Items");
});
app.post("/app/items", (rec, res) => {
  const newItem = rec.body;
  res.send("new Item add : " + newItem.name);
});
app.put("/app/items/:id", (rec, res) => {
  const newItemId = rec.params.id;
  res.send(`Item with ID ${newItemId} updated`);
});
app.delete("/app/items/:id", (rec, res) => {
  const itemId = rec.params.id;
  res.send(`Item with ID ${itemId} deleted`);
});
