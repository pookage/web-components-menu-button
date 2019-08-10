import styles, { locals as s } from "./styles.scss";

const template = document.createElement("template");

template.innerHTML = `
	<style>
		${styles.toString()}
	</style>
	<div 
		class="${s.wrapper} ${s.inactive}">
		<input 
			id="menu-button"
			class="${s.checkbox}" 
			type="checkbox" 
		/>
		<label for="menu-button">
			<span class="${s.label} ${s.close}" aria-hidden="true">
				Close
			</span>
			<span class="${s.label} ${s.open}">
				<slot name="label">
					Boy, you need a label.
				</slot>
			</span>
			<span></span>
		</label>
	</div>
`;

export default template;