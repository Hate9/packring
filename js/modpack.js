window.onload = async function() {
	var converter = new showdown.Converter();
	let text = await ajaxRequest("/packs/"+window.location.search.replace("?", "")+".md");
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
}