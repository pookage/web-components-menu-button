import template from "./template.js";
import { mutatationObserverConfig } from "./configs.js";
import { locals as s } from "./styles.scss";

export default class Page extends HTMLElement {

	constructor(){

		super();

		//scope binding
		this.renderChildren = this.renderChildren.bind(this);

		//dom
		const shadow   = this.attachShadow({ "mode": "open" });
		const clone    = document.importNode(template.content, true);
		const wrapper  = this.wrapper = clone.querySelector(`.${s.wrapper}`);

		//child-watching
		const observer = new MutationObserver(this.renderChildren);

		//init
		observer.observe(this, mutatationObserverConfig);
		shadow.appendChild(clone);
	}//constructor

	renderChildren(mutations){

		const {
			wrapper, // (HTMLElement) <main> in template
			children // (HTMLCollection) all non-slot child nodes
		} = this;

		//clear contents of <main>
		wrapper.innerHTML = "";

		//add direct children
		for(let child of children){
			const clone = document.importNode(child, true);
			wrapper.appendChild(clone);
		}
	}//renderChildren
}//Page