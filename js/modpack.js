var converter = new showdown.Converter();
window.onload = async function() {
	let contentElem = document.getElementById("content");
	let text = await ajaxRequest("/packring/packs/"+window.location.search.replace("?", "")+".md");
	let yaml = jsyaml.load(
		/^---[\r\n]*(.*)^---/gsm.exec(
			text
		)[1]
	);
	let markdown = converter.makeHtml(
		/\n---(.*(?!---).*)$/gs.exec(
			text
		)[1]
	);
	document.title = yaml.Title;
	var titleHyper = insertDOMElement("a", "", contentElem);
	titleHyper.setAttribute("href", yaml.URL);
	insertDOMElement("h1", yaml.Title, titleHyper);
	
	var div = insertDOMElement("div", markdown, contentElem);
	div.setAttribute("id", "packdescription");
}