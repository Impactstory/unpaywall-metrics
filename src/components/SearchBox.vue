<template>
    <div class="search-box">
        <input v-model="query" @keyup.enter="goSearch"></input>
        <div class="icon md-primary" @click="goSearch">
            <md-icon>search</md-icon>

        </div>


    </div>
</template>

<script>
    import _ from 'lodash'
    export default {
        name: "SearchBox",
        data: () => ({
            query:""
        }),
        computed: {
            cleanQuery(){
                return _.snakeCase(this.query)
            }
        },
        methods: {
            goSearch(){

                this.$router.push({
                    name: "search",
                    params: {
                        q: this.cleanQuery
                    }
                })

            }
        }
    }
</script>

<style scoped lang="scss">
    div.search-box {
        max-width: 500px;
        padding: 20px 0;
        border: none !important;
        display:flex;
        width: 100%;
        input {
            width: 100%;
            height: inherit;
            outline:none; // clear browser styles
            max-width: 500px;
            font-size: 18px;
            padding: 15px 25px;
            border: 1px solid #aaa;
            border-radius: 50px;
            box-shadow: 0px 2px 2px rgba(0,0,0,.05);
            transition: box-shadow 0.3s;
            &:hover {
                box-shadow: 0px 2px 6px rgba(0,0,0,.4);

            }
        }
        div.icon {
            display: flex;
            margin-left: -40px;
            cursor:pointer;
            color: #2196F3;
        }
        div.md-field {
        }
    }
</style>