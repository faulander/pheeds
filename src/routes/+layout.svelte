<script lang='ts'>
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import { Avatar } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>


<AppShell>
	<svelte:fragment slot="header">
<AppBar>
	<svelte:fragment slot="lead">(ICON)</svelte:fragment>
	Pheeds
	<svelte:fragment slot="trail">
  		{#if data?.username}	
            <Avatar initials="HF" width="w-10" background="bg-primary-500" />
		{:else}
            <a href="/login" class="button bg-primary-500">Log in</a>
		{/if}
	</svelte:fragment>
</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
	<!-- (sidebarRight) -->
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment>
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>