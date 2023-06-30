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

    const favoriteLanguages: LanguageProps[] = shuffle([
        { alt: "Rust", src: RustLogo },
        { alt: "Swift", src: SwiftLogo },
        { alt: "Lua", src: LuaLogo },
        { alt: "Csharp", src: CsharpLogo },
        { alt: "Svelte", src: SvelteLogo },
        { alt: "Shell", src: ShellLogo },
    ]);
</script>

<div class="relative flex flex-col justify-end items-center h-screen-content">
    <img
        src={Stars}
        alt="stars"
        class="absolute bottom-0 left-0 w-screen h-screen pointer-events-none mix-blend-screen"
    />
    <img
        alt="avatar"
        class="w-52 rounded-full absolute bottom-[73vh] translate-y-1/2 shadow-[0_0_25px] shadow-yellow-100 pointer-events-none"
        src="https://github.com/cpea2506.png"
    />
    <div class="absolute bottom-[16vh] z-10 flex-center gap-2 md:gap-6">
        {#each favoriteLanguages as { src, alt }, pos}
            <Language {alt} {src} {pos} />
        {/each}
    </div>
    <img
        src={Island}
        alt="island"
        class="absolute left-1/2 -translate-x-1/2 w-[800px] pointer-events-none bottom-0"
    />
    <DeepBlueSea />
</div>
