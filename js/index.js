window.onload = async function() {
	var packs = (await ajaxRequest("/packring/.packs", true, "text/plain")).split("\n");
	for (i = 0; i < packs.length; i++) {
		let yaml = jsyaml.load(
			/^---[\r\n]*(.*)^---/gsm.exec(
				await ajaxRequest("/packring/packs/"+packs[i])
			)[1]
		);
		
		insertDOMElement("a", "<img class=\"packimage\" src=\"res/"+yaml.Image+"\" alt=\""+yaml.Title+"\" title=\""+yaml.Title+"\"></img>", document.getElementById("packlist"))
			.setAttribute("href", "modpack?"+packs[i].replace(/\.[^/.]+$/, ""));
	};
}