<div class="relative w-full">
    <div class="wave waving-left bottom-0 z-50 opacity-100" />
    <div class="wave waving-right bottom-[10px] z-40 opacity-50" />
    <div class="wave waving-left bottom-[15px] z-30 opacity-20" />
    <div class="wave wving-right bottom-5 z-40 opacity-70" />
</div>

<style lang="scss">
    @mixin waving($direction) {
        animation: waving-#{$direction} 4s linear infinite;
    }

    .wave {
        @apply absolute h-[100px] w-full;

        background-image: url("$assets/images/wave.png");
        background-size: 1000px 100px;
    }

    .waving-left {
        @include waving(left);
    }

    .waving-right {
        @include waving(right);
    }

    @keyframes waving-left {
        0% {
            background-position-x: 1000px;
        }

        100% {
            background-position-x: 0px;
        }
    }

    @keyframes waving-right {
        0% {
            background-position-x: 0px;
        }

        100% {
            background-position-x: 1000px;
        }
    }
</style>
