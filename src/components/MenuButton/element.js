import template from "./template.js";
import { locals as s } from "./styles.scss";

export default class MenuButton extends HTMLElement {

	constructor(){

		super();


		//dom
		const shadow     = this.attachShadow({ "mode": "open" });
		const clone      = document.importNode(template.content, true);
		const button     = this.wrapper = clone.querySelector(`.${s.wrapper}`);
		const closeLabel = this.closeLabel = clone.querySelector(`.${s.close}`);
		
		//creating a watchable state
		let stateUpdated = this.stateUpdated;
		const handler    = {
			set(target, key, value){
				target[key] = value;
				stateUpdated(target);
				return true;
			}
		};
		const initialState = {
			open: false
		};
		const state = new Proxy(initialState, handler);


		//scope binding
		this.toggleOpen = this.toggleOpen.bind(this, state);
		stateUpdated    = this.stateUpdated.bind(this);

		//add listeners
		button.addEventListener("click", this.toggleOpen);

		//add to DOM
		shadow.appendChild(clone);
	}//constructor

	stateUpdated(state){
		const { open } = state;
		const { wrapper } = this;

		if(open){
			wrapper.classList.add(s.active);
			wrapper.classList.remove(s.inactive);
		} else {
			wrapper.classList.remove(s.active);
			wrapper.classList.add(s.inactive)
		}
	}//stateUpdated

	toggleOpen(state){

		const {
			open: currOpen
		} = state;

		state.open = !currOpen;
	}//toggleOpen

} // MenuButton