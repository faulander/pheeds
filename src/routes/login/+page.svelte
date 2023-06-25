<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<div class="container">
	<h1 class="text-xl font-semibold mt-8">Login or Register</h1>
	<form method="post">
		<input class="input mb-2 mt-2" type="text" placeholder="Username" name="username" required />
		<input class="input " type="password" placeholder="Password" name="password" required />
		{#if form?.errorMessage}
			<div class="text-sm text-red-500">{form.errorMessage}</div>
		{/if}
		<button class="bg-secondary-500 mt-4 mr-3 rounded p-2" type="submit" formaction="?/register">Register</button>
		<button class="bg-primary-500 mt-4 rounded p-2" type="submit" formaction="?/login">Login</button>
	</form>
</div>