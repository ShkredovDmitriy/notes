(function () {
    console.log("+++ ACCORDION");

    $(".acc__trigger").each((i, trigger) => {
        let isActive = false;
        $(trigger).on("click", () => {
            $(".acc__collapser").css("height", "0");
            if (!isActive) {
                const dropdown = $(trigger).parent().find(".acc__collapser");
                const body = $(trigger).parent().find(".acc__body");
                $(dropdown).css("height", $(body).get(0).scrollHeight);
            }
            isActive = !isActive;
        });
    });
})();

//
// <div className="acc__container">
//     <div className="acc__trigger">
//         {{$question}}
//         <span className="acc__trigger-icon">x</span>
//     </div>
//     <div className="acc__collapser">
//         <div className="acc__body">
//             <p>{{$answer}}</p>
//         </div>
//     </div>
// </div>
//
// .acc {
// &__container {
//         margin: 1rem;
//         width: calc(100% - 2rem);
//         user-select: none;
//         border: 1px solid #000;
//     }
//
// &__trigger {
//         position: relative;
//         width: 100%;
//         padding: 1.5rem 6.25rem 1.5rem 2rem;
//         font-size: 1.625rem;
//         font-weight: 400;
//         cursor: pointer;
//
//     &.active {
//         .acc__trigger-icon {
//                 transform: rotate(180deg);
//             }
//         }
//     }
//
// &__trigger-icon {
//         position: absolute;
//         top: calc(50% - 1.25rem);
//         right: 2rem;
//         width: 2.5rem;
//         height: 2.5rem;
//         transition: transform 0.4s ease-out;
//         pointer-events: none;
//     }
//
// &__collapser {
//         height: 0;
//         overflow: hidden;
//         transition: height 0.3s;
//     }
//
// &__body {
//         padding: 0 6.25rem 1.5rem 2rem;
//         font-size: 1rem;
//         font-weight: 300;
//         color: rgba(#000, 0.7);
//
//         p,
//             a {
//             font-size: 1rem;
//             color: #000;
//         }
//
//         a {
//             display: inline-block;
//             text-decoration: underline;
//         }
//     }
// }
