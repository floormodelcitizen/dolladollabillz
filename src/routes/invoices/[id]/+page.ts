import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({params}) => {
   if (params.id) return { id: params.id }
   throw error(404, 'Not Found')   
}) satisfies PageLoad;