var uv = document.querySelector("#uv-address")

uv.addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        if (e.target.value) {
            location = new URL(__uv$config.prefix + __uv$config.encodeUrl(e.target.value), location)
        }
    }
})
Footer
© 2023 GitHub, Inc.
Footer navigation
