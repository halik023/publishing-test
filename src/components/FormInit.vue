<template>
<div>
    <h1>Create Project</h1>
    <form @submit="createProject">
        <div class="form-group">
            <label>Number of Pages</label>
            <input v-model="formData.numberOfPages" type="number" class="form-control" placeholder="Enter number of pages" />
        </div>
        <div class="form-group">
            <label>Delivery Date</label>
            <input v-model="formData.deliveryDate" type="date" class="form-control" placeholder="Enter delivery date" />
        </div>
        <button type="submit" class="btn btn-primary">Create</button>
    </form>
</div>
</template>

<script>
import {
    mapActions
} from 'vuex';
export default {
    data() {
        return {
            formData: {
                numberOfPages: 48,
                deliveryDate: '2021-04-16'
            }
        }
    },

    methods: {
        ...mapActions([
            'infoProject'
        ]),
        createProject(e) {
            e.preventDefault();
            this.infoProject(this.formData);
            this.$router.push('/manager');
        }
    }
};
</script>

<style scoped lang="scss">
</style>
