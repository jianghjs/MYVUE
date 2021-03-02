<template>
    <div>
        Demo : {{ title }}
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            message : "子级数据"
        }
    },
    props: {
        title: {
            type : String,
            default : ''
        }
    },
    methods: {
        getMsg : function() {
            this.$emit("Msg", this.message)
        }
    }
}
</script>

<style scoped>

</style>