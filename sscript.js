function openApp(path) {
  var page = new ABC({
    "type": "blank",
    "url": window.location.origin + __uv$config.prefix + __uv$config.encodeUrl(new URL(path, window.location).toString())
  })
  page.open()
}
