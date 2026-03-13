import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch(env.API_URL);

  if (!res.ok) {
    throw new Error('No se pudo cargar los productos');
  }

  const products = await res.json();

  return { products };
};