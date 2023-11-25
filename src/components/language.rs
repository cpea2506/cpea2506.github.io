use leptos::*;
use rand::seq::SliceRandom;

pub struct Language {
    pub src: String,
    pub alt: String,
}

impl Language {
    pub fn new(src: &str, alt: &str) -> Self {
        Self {
            src: src.into(),
            alt: alt.into(),
        }
    }
}

#[component]
pub fn Language(
    #[prop(into)] src: String,
    #[prop(into)] alt: String,
    #[prop(into, optional)] class: String,
) -> impl IntoView {
    let mut animations = vec!["hover:animate-spin", "hover:animate-bounce"];
    animations.shuffle(&mut rand::thread_rng());

    view! {
        <img
            class=format!(
                "{class} h-auto max-w-full rounded-full shadow-[0_0_15px] shadow-white transition {animation}",
                animation = animations[0],
            )

            width="64"
            height="64"
            alt=alt
            src=src
        />
    }
}
