const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const markup = `
<ul class="fruits">
  <li class="fruits__mango"> Mango </li>
  <li class="fruits__apple"> Apple </li>
</ul>
`;
const $ = cheerio.load(markup);
console.log(pretty($.html()));
const mango = $(".fruits__mango");
console.log(mango.html()); 
const apple = $(".fruits__apple");
console.log(apple.attr("class"));
const listItems = $("li");
console.log(listItems.length); 
listItems.each(function (idx, el) {
  console.log($(el).text());
});
const ul = $("ul");
ul.append("<li>Banana</li>");s
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const listItems = $(".plainlist ul li");
    const countries = [];
    listItems.each((idx, el) => {
      const country = { name: "", iso3: "" };
      country.name = $(el).children("a").text();
      country.iso3 = $(el).children("span").text();
      countries.push(country);
    })
    console.dir(countries);
    fs.writeFile("coutries.json", JSON.stringify(countries, null, 2), (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Successfully written data to file");
    });
  } catch (err) {
    console.error(err);
  
}
scrapeData();