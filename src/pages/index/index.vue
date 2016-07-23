<template>
    <section class="img-slider">
        <ul class="wrapper">
            <li  v-for="item in comics.slice(0,6)" class="item">
                <img :src="item.preview" alt="">
            </li>
        </ul>
    </section>
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
    import Data from '../../components/data';
    export default {
        data() {
            return {
                comics: []
            }
        },
        ready() {
            Data.getHotComics().then((res) => {
                this.comics = res.body;
            })
        }
    }
</script>