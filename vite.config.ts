import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [
                NaiveUiResolver()
            ]
        }),
        legacy({
            targets: [
                '> 1%',
                'last 2 versions',
                'not dead'
            ]
        }),
    ]
})
