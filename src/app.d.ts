/// <reference types="@sveltejs/kit" />

declare module '$lib/icons/*.svg' {
	const content: SvelteComponent
	export default content
}

declare module '*.svg?component' {
	const content: any
	export default content
}

declare module '*.svg?src' {
	const content: string
	export default content
}

declare module '*.svg?url' {
	const content: string
	export default content
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}
