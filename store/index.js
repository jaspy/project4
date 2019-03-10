export const state = () => ({
    counter: 123
})

export const mutations = {
    increment (state) {
        state.counter++
    }
} 

export const getters = {
    counter (state) {
        return state.counter
    }
} 
