#!/usr/bin/env python3
import cgitb
import cgi

cgitb.enable()

print("Content-Type: text/html;charset=utf-8")
print("")

arguments = cgi.FieldStorage()

print('''
<!DOCTYPE html>
<html>
<head>
<title>Ben's YouTube Client</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="/ytclient/search_results.css">
<link rel="stylesheet" href="/ytclient/navbar.css">
<style>html,body { height:100%; }</style>
<script>
   window.onload = function() {
     var iframe = document.getElementById("video-frame");
     iframe.width = iframe.contentWindow.document.body.scrollWidth;
     iframe.height = iframe.contentWindow.document.body.scrollHeight;
   }
</script>
</head>

<body style="height:100%;">

<div style="display: flex; flex-flow: column; height: 100%;">
<div class="topnav">
  <a class="active" href="/ytclient"><i class="fa fa-unlock"></i> Ben's YouTube Client</a><a href=/cgi-bin/query.py?search=''' + arguments['search'].value + '''><i class="fa fa-reply"></i> Go Back</a>
</div>

<div style="flex: 1 1 auto;">
''')

print("<iframe id=\"video-frame\" src=\"https://yout-ube.com/watch?v=" + arguments['v'].value + "\" style=\"width: 100%; height: 100%;\" allowfullscreen></iframe>")

print("</div></div>")
print("</body>")
print("</html>")
