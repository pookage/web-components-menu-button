import template from "./template.js";
import { locals as s } from "./styles.scss";

export default class MenuButton extends HTMLElement {

	constructor(){

		super();
		const shadow = this.attachShadow({ "mode": "open" });
		const clone  = document.importNode(template.content, true);
		const button = this.wrapper = clone.querySelector(`.${s.wrapper}`);

		shadow.appendChild(clone);
	}//constructor

	connectedCallback(){
		const globalClass = this.className;
		this.wrapper.classList.add(globalClass);

		// console.log(this.wrapper);
	}//connectedCallback

} // MenuButton