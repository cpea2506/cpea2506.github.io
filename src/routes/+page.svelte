<script lang="ts">
    import DeepBlueSea from "$components/DeepBlueSea.svelte";
    import Stars from "/images/stars.jpg";
    import Island from "/images/island.png";
    import Language from "$components/Language.svelte";
    import RustLogo from "/images/languages/rust.png";
    import SwiftLogo from "/images/languages/swift.png";
    import LuaLogo from "/images/languages/lua.png";
    import CsharpLogo from "/images/languages/csharp.png";
    import SvelteLogo from "/images/languages/svelte.png";
    import ShellLogo from "/images/languages/shell.png";

    // Durstenfeld shuffle algorithm
    function shuffle(array: LanguageProps[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const favoriteLanguages: LanguageProps[] = [
        { alt: "Rust", src: RustLogo },
        { alt: "Swift", src: SwiftLogo },
        { alt: "Lua", src: LuaLogo },
        { alt: "Csharp", src: CsharpLogo },
        { alt: "Svelte", src: SvelteLogo },
        { alt: "Shell", src: ShellLogo },
    ];

    shuffle(favoriteLanguages);
</script>

<div class="relative flex flex-col justify-end items-center h-screen-content">
    <img
        src={Stars}
        alt="stars"
        class="absolute bottom-0 left-0 w-screen h-screen pointer-events-none mix-blend-screen"
    />
    <img
        alt="avatar"
        class="w-52 rounded-full absolute bottom-[70vh] translate-y-1/2 shadow-[0_0_25px] shadow-yellow-100"
        src="https://github.com/cpea2506.png"
    />
    <div class="absolute bottom-[16vh] z-10 flex-center gap-2 md:gap-6">
        {#each favoriteLanguages as { src, alt }}
            <Language {alt} {src} />
        {/each}
    </div>
    <img
        src={Island}
        alt="island"
        class="absolute left-1/2 -translate-x-1/2 w-[800px] pointer-events-none bottom-0"
    />
    <DeepBlueSea />
</div>
