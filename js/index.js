window.onload = async function() {
	var packs = (await ajaxRequest("/packring/packs.txt", true, "text/plain")).split("\n");
	for (i = 0; i < packs.length; i++) {
		let yaml = jsyaml.load(
			/^---[\r\n]*(.*)^---/gsm.exec(
				await ajaxRequest("/packring/packs/"+packs[i])
			)[1]
		);
		
		let div = insertDOMElement("div", "", document.getElementById("packlist"));
		div.setAttribute("class", "packicon");
		
		let link = insertDOMElement("a", "", div);
		link.setAttribute("href", "modpack?"+packs[i].replace(/\.[^/.]+$/, ""));
		
		let img = insertDOMElement("img", "", link);
		img.setAttribute("class", "packimage");
		img.setAttribute("src", "res/"+yaml.Image);
		img.setAttribute("alt", yaml.Title);
		img.setAttribute("title", yaml.Title);
		
		insertDOMElement("p", yaml.Description, div);
	};
}