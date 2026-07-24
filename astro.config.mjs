// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    site:"https://lightseagreen-mosquito-321904.hostingersite.com/",
    integrations: [icon()],
    vite:{
        plugins:[tailwindcss()],
    }
});
