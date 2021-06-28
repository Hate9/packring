var converter = new showdown.Converter();
const yamlBlockPattern = /^---[\r\n]*(.*)^---/gsm,
	markdownBlockPattern = /\n---(.*(?!---).*)$/gs;

window.onload = async function() {
	var packs = (await ajaxRequest(".packs", true, "text/plain")).split("\n");
	for (i = 0; i < packs.length; i++) {
		console.log("found pack "+packs[i]);
		let text = await ajaxRequest("packs/"+packs[i]);
		let yaml = jsyaml.load(yamlBlockPattern.exec(text)[1]);
		console.log(yaml);
		let markdown = converter.makeHtml(markdownBlockPattern.exec(text)[1]);
		
		let div = document.createElement("div");
		div.innerHTML = "<h1>"+yaml.Title+"</h1>";
		document.getElementById("content").appendChild(div);
	};
}