<template>
    <div>
        Hi : {{ this.title }}
        <el-button @click="updateState">add</el-button>
        <p>Hi load count : {{ getCount }}</p>
    </div>
</template>

<script>
export default {
    name: 'Hi',
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
        },
        updateState : function() {
            this.$store.commit("add")
        }
    },
    computed: {
        getCount: function() {
            return this.$store.state.count
        }
    }
}
</script>

<style scoped>

</style>