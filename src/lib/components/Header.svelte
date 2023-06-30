<script lang="ts">
    import Logo from "$assets/images/logo.png";
    import Icon from "$components/Icon.svelte";
    import TiSocialGithubCircular from "svelte-icons-pack/ti/TiSocialGithubCircular";

    const defaultIconColor = "#9ca3b2";
    let iconColor = defaultIconColor;

    function handleIconMouseOver() {
        iconColor = "#eceef0";
    }

    function handleIconMouseOut() {
        iconColor = defaultIconColor;
    }
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
    <a
        href="https://github.com/cpea2506"
        target="_blank"
        class="flex-items-center"
        on:mouseover={handleIconMouseOver}
        on:focus={handleIconMouseOver}
        on:mouseout={handleIconMouseOut}
        on:blur={handleIconMouseOut}
    >
        <Icon
            src={TiSocialGithubCircular}
            size="2em"
            title="Github"
            color={iconColor}
        />
    </a>
</nav>
