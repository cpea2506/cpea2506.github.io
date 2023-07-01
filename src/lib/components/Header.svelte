<script lang="ts">
    import Logo from "$assets/images/logo.png";
    import GitHubIcon from "./GitHubIcon.svelte";
</script>

<nav class="sticky top-0 z-10 h-[3.75rem] px-4 py-2">
    <div class="flex-items-center flex-1">
        <a href="/" class="flex-items-center mr-4">
            <img alt="avatar" class="mr-2 h-8" src={Logo} />
            <b class="text-red">CPea's Journey</b>
        </a>
        <a class="mr-4" href="/works"> Works </a>
        <a class="mr-4" href="/blogs"> Blogs </a>
    </div>
    <GitHubIcon size="1.2rem" />
</nav>
