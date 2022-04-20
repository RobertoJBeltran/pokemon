// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let {limit, offset} = req.query;
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  let data = await response.json();
  // Destructure
  let count = await data.count;
  let pokemon = await data.results
  return res.status(200).json({"pokemon": pokemon, "count": count});
}
