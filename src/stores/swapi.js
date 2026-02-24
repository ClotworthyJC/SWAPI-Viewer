import { defineStore } from "pinia";

export const useSwapiStore = defineStore('swapi', {
    state : () => {
        return {
            category : "",
            categoryList : []
        }
    },

    actions : {
        SetCategory(_category){
            this.category = _category
        },
        UpdateCategoryList(_listData){
            this.categoryList = _listData
        }
    }
})