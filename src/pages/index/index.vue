<template>
<p>123</p>
</template>

<script>
    import Data from '../../components/data';
    export default {
        ready() {
            Data.getHotComics().then(function (res) {
                console.log(res.body)
            })
        }
    }
</script>