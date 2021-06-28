var converter = new showdown.Converter();

var text = ajaxRequest("packs/witchcraft.md", true, false);

console.log(jsyaml.load(text));
console.log(converter.makeHtml(text));