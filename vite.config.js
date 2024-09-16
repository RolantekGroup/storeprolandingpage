// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { createAlias } from 'vite-plugin-alias'

// export default defineConfig({
//   plugins: [
//     react(),
//     createAlias({
//       '@': '/src', // Example alias for '@' pointing to '/src'
//     })
//   ]
// })




import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
