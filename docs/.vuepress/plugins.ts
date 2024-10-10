import { searchPlugin } from '@vuepress/plugin-search'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

export default [
    mediumZoomPlugin({
        selector: '[vp-content] :not(a) > img:not(.no-zoom)'
    }),
    // This seems not to be working. The search bar is not displayed.
    searchPlugin({
        locales: {
            '/': {
                placeholder: 'Search',
            }
        }
    }),]