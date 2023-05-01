/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                ndkPurple: '#6d0593'
            },
            fontFamily: {
                sans: [
                    'Inter var, sans-serif',
                    {
                        fontFeatureSettings: '"cv11", "ss01"',
                        fontVariationSettings: '"opsz" 32'
                    }
                ]
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
            },
            typography: {
                DEFAULT: {
                    css: {
                        'code::before': { content: '""' },
                        'code::after': { content: '""' }
                    }
                }
            }
        }
    },
    plugins: [require('@tailwindcss/typography')]
};
