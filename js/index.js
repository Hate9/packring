var converter = new showdown.Converter();

window.onload = async function() {
	var packs = (await ajaxRequest(".packs", true, "text/plain")).split("\n");
	for (i = 0; i < packs.length; i++) {
		let text = await ajaxRequest("packs/"+packs[i]);
		let yaml = jsyaml.load(/^---[\r\n]*(.*)^---/gsm.exec(text)[1]);
		let markdown = converter.makeHtml(/\n---(.*(?!---).*)$/gs.exec(text)[1]);
		
		insertDOMElement("div", "<h1>"+yaml.Title+"</h1>", document.getElementById("content"));
	};
}