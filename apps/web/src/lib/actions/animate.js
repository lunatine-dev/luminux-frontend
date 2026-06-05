export function animateIn(node, delay = 0) {
    node.classList.add(
        "transition-all",
        "duration-1000",
        "ease-out",
        "opacity-0",
        "translate-y-12",
        "will-change-transform",
    );

    if (delay) {
        node.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                node.classList.remove("opacity-0", "translate-y-12");
                node.classList.add("opacity-100", "translate-y-0");

                observer.unobserve(node);
            }
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        },
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        },
    };
}
