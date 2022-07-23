import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                
                'resources/assets/auth/vendors/mdi/css/materialdesignicons.min.css',
                'resources/assets/auth/vendors/css/vendor.bundle.base.css',
                'resources/assets/auth/css/style.css',


                'resources/assets/auth/js/vendors/js/vendor.bundle.base.js',
                'resources/assets/auth/js/vendors/chart.js/Chart.min.js',
                'resources/assets/auth/js/js/jquery.cookie.js',
                'resources/assets/auth/js/js/off-canvas.js',
                'resources/assets/auth/js/js/hoverable-collapse.js',
                'resources/assets/auth/js/js/misc.js',
                'resources/assets/auth/js/dashboard.js',
                'resources/assets/auth/js/todolist.js',

            ],
            refresh: true,
        }),
    ],
});
