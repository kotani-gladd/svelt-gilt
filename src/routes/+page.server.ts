
import type { PageServerLoad } from './$types';
import { API_URL } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error('No se pudo cargar los productos');
  }

  const products = await res.json();

  return { products };
};