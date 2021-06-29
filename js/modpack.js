var converter = new showdown.Converter();
window.onload = async function() {
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
}