import { searchPlugin } from '@vuepress/plugin-search'

console.log(searchPlugin())

export default [
    // This seems not to be working. The search bar is not displayed.
    searchPlugin({
        locales: {
            '/': {
                placeholder: 'Search',
            }
        }
    }),]