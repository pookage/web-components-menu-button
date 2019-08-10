import styles, { locals as s } from "./styles.scss";

const template = document.createElement("template");

template.innerHTML = `
	<style>
		${styles.toString()}
	</style>
	<button class="${s.wrapper}">
		<slot name="label">
			Boy, you need a label.
		</slot>
	</button>
`;

export default template;