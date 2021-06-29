/*insertDomElement: creates and inserts an element into the document
  parameters:
  elementType: a string representing the name of the element type you wish to create
  content: a string representing the inner HTML of the element
  parent: the Node you would like to insert the element into
*/
function insertDOMElement(elementType, content, parent = document.body) {
	let element = document.createElement(elementType);
	element.innerHTML = content;
	parent.appendChild(element);
	return element;
}
