<script lang="ts">
    import Icon from "svelte-icons-pack/Icon.svelte";
    import TiSocialGithubCircular from "svelte-icons-pack/ti/TiSocialGithubCircular";

    let color = "#d7d7ff";

    function handleIconMouseOver() {
        color = "#e06c75";
    }

    function handleIconMouseOut() {
        color = "#d7d7ff";
    }
</script>

<nav class="h-[3.75rem] sticky top-0 z-[2] py-2 px-4">
    <div class="flex-items-center flex-1">
        <a href="/" class="flex-items-center mr-4">
            <img alt="Captain face" class="h-8 mr-2" src="/images/logo.png" />
            <b>CPea's Journey</b>
        </a>
        <a class="mr-4" href="/"> Works </a>
        <a class="mr-4" href="/blogs"> Blogs </a>
    </div>
    <a
        href="https://github.com/cpea2506"
        target="_blank"
        class="flex-items-center"
        on:mouseover={handleIconMouseOver}
        on:focus={handleIconMouseOver}
        on:mouseout={handleIconMouseOut}
        on:blur={handleIconMouseOut}
    >
        <Icon src={TiSocialGithubCircular} size="2em" title="Github" {color} />
    </a>
</nav>
