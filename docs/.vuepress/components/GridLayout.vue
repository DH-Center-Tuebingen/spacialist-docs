<!-- .vuepress/components/GridLayout.vue -->
<template>
    <Layout>
        <template #page>
            <main class="vp-page">
                <div
                    class="theme-default-content"
                    vp-content
                >
                    <Content />

                    <div
                        class="vp-features"
                        v-if="$frontmatter?.grid && $frontmatter.grid?.length > 0"
                    >
                        <component
                            class="vp-feature"
                            v-for="item in $frontmatter.grid"
                            :is="item.link ? 'a' : 'div'"
                            :href="hrefOf(item)"
                            :key="item.title"
                        >
                            <div style="padding: 0.2rem 1rem;">
                                <img
                                    v-if="item.icon"
                                    class="no-zoom"
                                    :src="getImage(item.icon)"
                                    alt=""
                                >
                            </div>
                            <header>
                                <h2>{{ item.title }}</h2>
                            </header>
                            <p>{{ item.details }}</p>
                        </component>
                    </div>
                </div>
            </main>

        </template>
    </Layout>
</template>

<script lang="ts">
    import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
    import { Content, resolveRoutePath, withBase } from 'vuepress/client';

    export default {
        components: {
            Layout,
        },
        setup() {
            
            const hrefOf = (item) => {
                if (item.link) {
                    return resolveRoutePath(item.link);
                }
                return '';
            } 
            
            const getImage = (icon) => {
                return withBase(icon);
            }

            return {
                Content,
                hrefOf,
                getImage,
                resolveRoutePath,
            }
        }
    }
</script>

<style lang="scss" scoped>

.vp-features {
    align-items: stretch;
    
    img {
        display: block;
        max-width: 33vw;
        margin: auto;
    }
}

.vp-feature {
    filter: brightness(0.7) grayscale(0.8);
    padding: .5rem 1rem;
    box-sizing: border-box;
    margin-bottom: 1rem;
    
    header {
        
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        min-height: 4rem;
        
        h2 {
            margin: 0;
            padding-top: 0;
        }
    }
}

a.vp-feature {
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaecef;
    border-radius: 1rem;
    filter: brightness(0.85);
    transition: all 0.1s;
    
    &:hover {
        filter: brightness(1);
    }
}

@media (min-width: 1200px){
    .vp-feature {
        max-width: 23%;
        flex-basis: 23%;
    }
}

@media (max-width: 920px){
    .vp-feature {
        max-width: 46%;
        flex-basis: 46%;
    }
}




</style>