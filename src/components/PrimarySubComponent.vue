<template>
    <sub class="primary-sub">
        <div class="primary-sub__word" v-for="(word, index) in textArray" :key="index" @mouseover="wordActive($event.target)">
            <div class="primary-sub__top">{{ word }}</div>
            <div class="primary-sub__bottom">{{ word }}</div>
        </div>
    </sub>
</template>

<script>

export default {
    props: ['text'],
    data(){return{
        textArray: []
    }},
    created()
    {
        this.textArray = this.text.split(' ');
    },
    methods: 
    {
        wordActive(e)
        {
            if(e.classList.contains('primary-sub__top') ||
               e.classList.contains('primary-sub__bottom'))
            {
                e.parentNode.classList.add('primary-sub__word--active');
                setTimeout(() => 
                {
                e.parentNode.classList.remove('primary-sub__word--active');
                }, 2000);
            }
        },
    }
}
</script>
