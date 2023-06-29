<div class="relative w-full">
    <div class="wave waving-left opacity-100 bottom-0 z-50" />
    <div class="wave waving-right opacity-50 bottom-[10px] z-40" />
    <div class="wave waving-left opacity-20 bottom-[15px] z-30" />
    <div class="wave wving-right opacity-70 bottom-5 z-40" />
</div>

<style lang="scss">
    @mixin waving($direction) {
        animation: waving-#{$direction} 4s linear infinite;
    }

    .wave {
        @apply absolute w-full h-[100px];

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
