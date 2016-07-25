<template>
    <article class="index-page">
        <search-bar></search-bar>
    </article>
</template>

<style lang="sass" scoped rel="stylesheet/scss">
    .img-slider {
        .wrapper {

        }
        .item {
            width: 130px;
            height: 170px;
            img {
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
</style>

<script>
//    import Data from '../../components/data';
    import SearchBar from './components/search-bar/index.vue'
    export default {
        data() {
            return {
                comics: []
            }
        },
        components: {
            'search-bar': SearchBar
        },
        ready() {
//            Data.getHotComics().then((res) => {
//                this.comics = res.body;
//            })
        }
    }
</script>