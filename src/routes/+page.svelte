<script>
    import DeepBlueSea from "$components/DeepBlueSea.svelte";
</script>

<div class="relative flex flex-col justify-end items-center h-screen-content">
    <img
        src="/images/stars.jpg"
        alt="stars"
        class="absolute bottom-0 left-0 w-screen h-screen pointer-events-none mix-blend-screen"
    />
    <img
        alt="avatar"
        class="w-52 rounded-full absolute bottom-[70vh] translate-y-1/2 shadow-xl shadow-yellow-100"
        src="https://github.com/cpea2506.png"
    />
    <img
        src="/images/island.png"
        alt="island"
        class="absolute left-1/2 -translate-x-1/2 w-[800px] pointer-events-none bottom-0"
    />
    <DeepBlueSea />
</div>
