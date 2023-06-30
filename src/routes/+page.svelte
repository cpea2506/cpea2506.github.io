<script lang="ts">
    import DeepBlueSea from "$components/DeepBlueSea.svelte";
    import Language from "$components/Language.svelte";
    import Stars from "$assets/images/stars.jpg";
    import Island from "$assets/images/island.png";
    import RustLogo from "$assets/images/languages/rust.png";
    import SwiftLogo from "$assets/images/languages/swift.png";
    import LuaLogo from "$assets/images/languages/lua.png";
    import CsharpLogo from "$assets/images/languages/csharp.png";
    import SvelteLogo from "$assets/images/languages/svelte.png";
    import ShellLogo from "$assets/images/languages/shell.png";
    import { shuffle } from "$utils/arrays";
    import Avatar from "$components/Avatar.svelte";

    const favoriteLanguages: LanguageProps[] = shuffle([
        { alt: "Rust", src: RustLogo },
        { alt: "Swift", src: SwiftLogo },
        { alt: "Lua", src: LuaLogo },
        { alt: "Csharp", src: CsharpLogo },
        { alt: "Svelte", src: SvelteLogo },
        { alt: "Shell", src: ShellLogo },
    ]);
</script>

<div class="h-screen-content relative flex flex-col items-center justify-end">
    <img
        src={Stars}
        alt="stars"
        class="pointer-events-none absolute bottom-0 left-0 h-screen w-screen mix-blend-screen"
    />
    <Avatar
        src="https://github.com/cpea2506.png"
        class="absolute bottom-[73vh] translate-y-1/2 shadow-[0_0_25px] shadow-yellow-100"
    />
    <div class="flex-center absolute bottom-[16vh] z-10 gap-2 md:gap-6">
        {#each favoriteLanguages as { src, alt }, pos}
            <Language {alt} {src} {pos} />
        {/each}
    </div>
    <img
        src={Island}
        alt="island"
        class="pointer-events-none absolute bottom-0 left-1/2 w-[800px] -translate-x-1/2"
    />
    <DeepBlueSea />
</div>
