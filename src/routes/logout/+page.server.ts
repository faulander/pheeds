import { deleteSession } from '$lib/server/sessionStore';
import { redirect } from '@sveltejs/kit';
import type { ServerLoad } from '@sveltejs/kit';

export const load = (({ cookies }) => {
	const sid = cookies.get('sid');
	if (sid) {
		cookies.delete('sid');
		deleteSession(sid);
	}

	throw redirect(303, '/');
}) satisfies ServerLoad;
