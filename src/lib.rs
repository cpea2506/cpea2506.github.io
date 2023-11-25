use leptos::*;

pub mod components;

use components::avatar::Avatar;
use components::deep_blue_sea::DeepBlueSea;
use components::language::*;
use rand::seq::SliceRandom;

#[component]
pub fn App() -> impl IntoView {
    let mut favorite_languages = vec![
        Language::new("assets/images/languages/swift.png", "Swift"),
        Language::new("assets/images/languages/csharp.png", "Csharp"),
        Language::new("assets/images/languages/rust.png", "Rust"),
        Language::new("assets/images/languages/shell.png", "Shell"),
        Language::new("assets/images/languages/lua.png", "Lua"),
    ];
    favorite_languages.shuffle(&mut rand::thread_rng());

    view! {
        <img src="assets/images/stars.jpg" alt="stars" class="select-none pointer-events-none mix-blend-screen"/>
        <div class="flex flex-col items-center justify-end">
            <Avatar
                src="https://github.com/cpea2506.png"
                link="https://github.com/cpea2506"
                class="absolute bottom-[73vh] translate-y-1/2 shadow-[0_0_25px] shadow-yellow-100"
            />
            <div class="flex items-center justify-center absolute bottom-[16vh] z-10 gap-2 md:gap-6">
                {favorite_languages
                    .into_iter()
                    .map(|l| {
                        view! { <Language src=l.src alt=l.alt/> }
                    })
                    .collect_view()}
            </div>
            <img
                src="assets/images/island.png"
                alt="island"
                class="select-none pointer-events-none absolute bottom-0 left-1/2 w-[800px] -translate-x-1/2"
            />
            <DeepBlueSea/>
        </div>
    }
}
