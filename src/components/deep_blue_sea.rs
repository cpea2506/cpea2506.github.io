use leptos::*;
use stylers::style_str;

#[component]
pub fn DeepBlueSea() -> impl IntoView {
    let (class, style) = style_str! {
        .wave {
            position: absolute;
            height: 100px;
            width: 100%;
            background-image: url("assets/images/wave.png");
            background-size: 1000px 100px;
        }

        .waving-left {
            animation: waving-left 4s linear infinite;;
        }

        .waving-right {
            animation: waving-right 4s linear infinite;;
        }

        @keyframes waving-left {
            0% {
                background-position-x: 1000px;
            }

            100% {
                background-position-x: 0px;
            }
        }

        @keyframes waving-right {
            0% {
                background-position-x: 0px;
            }

            100% {
                background-position-x: 1000px;
            }
        }
    };

    view! { class=class,
        <style>{style}</style>
        <div class="absolute bottom-0 w-full">
            <div class="wave waving-left bottom-0 z-50 opacity-100"></div>
            <div class="wave waving-right bottom-[10px] z-40 opacity-50"></div>
            <div class="wave waving-left bottom-[15px] z-30 opacity-20"></div>
            <div class="wave wving-right bottom-5 z-40 opacity-70"></div>
        </div>
    }
}
