import styles, { locals as s } from "./styles.scss";

const template = document.createElement("template");

template.innerHTML = `
	<style>
		${styles.toString()}
	</style>
	<main class="${s.wrapper}">
		<menu-button class="${s.menuButton}">
			<span slot="label">
				Click Me!
			</span>
		</menu-button>
	</main>
`;

export default template;