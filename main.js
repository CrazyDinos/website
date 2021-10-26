function scrollToSection(e) {
    if (e !== "") {
        $("html, body").animate(
            {
                scrollTop: $(e).offset().top,
            },
            800
        );
    }
}