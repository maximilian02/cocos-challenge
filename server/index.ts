import express from "express"

const app = express()
const port = 3000

// Disclaimer:  just a very dummy set of endpoints
// to get and deliver the challenge data

app.get("/instruments", (req, res) => {
  const result = { data: [{ id: 1 }] }
  console.log("DEBUG >> " + result)
  res.json(result)
})

app.get("/*", (req, res) => {
  // console.log("ERROR >> " + req);
  res.json({ message: "404, nope" })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
