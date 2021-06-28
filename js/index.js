var converter = new showdown.Converter();

window.onload = async function() {
	var text = await ajaxRequest("packs/witchcraft.md");
	const yamlBlockPattern = /^---[\r\n]*(.*)^---/gsm;
	const markdownBlockPattern = /\n---(.*(?!---).*)$/gs;
	var yamlText = yamlBlockPattern.exec(text)[1];
	var markdownText = markdownBlockPattern.exec(text)[1];
	console.log(jsyaml.load(yamlText));
	console.log(converter.makeHtml(markdownText));
	document.getElementById("content").innerHTML = converter.makeHtml(markdownText);
}