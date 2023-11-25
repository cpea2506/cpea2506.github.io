use leptos::*;

#[component]
pub fn Avatar(
    #[prop(into)] src: String,
    #[prop(into, optional)] class: String,
    #[prop(into, optional)] link: String,
) -> impl IntoView {
    let (is_loaded, set_is_loaded) = create_signal(false);

    view! {
        <img src=src.clone() class="hidden" on:load=move |_| set_is_loaded.set(true)/>

        {move || {
            if is_loaded() {
                view! {
                    <a href=link.clone() class="w-52 rounded-full">
                        <img alt="avatar" loading="lazy" src=src.clone() class=format!("w-52 rounded-full {class}")/>
                    </a>
                }
                    .into_any()
            } else {
                view! { <div class=format!("h-52 w-52 animate-pulse rounded-full bg-yellow-50/50 {class}")></div> }
                    .into_any()
            }
        }}
    }
}
