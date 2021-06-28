var converter = new showdown.Converter();

var text = "---\nTitle: 'WitchCraft'\nAuthor: 'Hate9'\nCSS: 'witchcraft.css'\nURL: 'https://www.curseforge.com/minecraft/modpacks/witchcraft-dimensions'\n---\n# WitchCraft\n**WitchCraft** is a modpack.";
const yamlBlockPattern = /^---[\r\n]*(.*)^---/gsm;
const markdownBlockPattern = /\n---(.*(?!---).*)$/gs;
var yamlText = yamlBlockPattern.exec(text)[1];
var markdownText = markdownBlockPattern.exec(text)[1];
console.log(jsyaml.load(yamlText));
console.log(converter.makeHtml(markdownText));
document.getElementById("content").innerHTML = converter.makeHtml(markdownText);