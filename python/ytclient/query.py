#!/usr/bin/env python3
import cgitb
import cgi
from youtubesearchpython import *

cgitb.enable(logdir="./logs/")

visits_r = open("visits.txt", "r")
visits_count = int(visits_r.read())
visits_r.close()
visits_count += 1
visits_w = open("visits.txt", "w")
visits_w.write(str(visits_count))
visits_w.close()

print("Content-Type: text/html;charset=utf-8")
print("")

arguments = cgi.FieldStorage()

videosSearch = VideosSearch(arguments['search'].value, limit=20)

results = videosSearch.result()
count = 2

print('''
<!DOCTYPE html>
<html>
<head>
<title>Ben's YouTube Client</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="/ytclient/search_results.css">
<link rel="stylesheet" href="/ytclient/navbar.css">
</head>

<body>

<div class="topnav">
  <a class="active" href="/ytclient"><i class="fa fa-unlock"></i> Ben's YouTube Client</a><a href="/ytclient"><i class="fa fa-reply"></i> Go Back</a><a>Total searches made: ''' + str(visits_count) + '''</a>
  <div class="search-container">
    <form action="/cgi-bin/query.py">
      <input type="text" placeholder="Search for a video..." name="search">
      <button type="submit"><i class="fa fa-search"></i></button>
    </form>
  </div>
</div>

<div style="padding-left:16px">
''')

print("<h2>Search results for \"" + arguments['search'].value + "\"</h2>")

for i in range(count):
    for result_number, video in enumerate(results['result']):
        print()
        print("<a href=" + str(video['link']).replace('https://www.youtube.com/watch', '/cgi-bin/view_video.py') + "&search=" + arguments['search'].value + "><div class=\"container\">")
        print("<div class=\"image\">")
        print("<img src=\"" + str(video['thumbnails'][0]['url']) + "\" width=\"250px\"></img>")
        print("</div>")
        print("<div class=\"text\">")
        print("<p><strong>" + str(video['title']) + "</strong></p>")
        print("<p><em><a href=" + str(video['channel']['link']) + ">" + str(video['channel']['name']) + "</a></em></p>")
        print("<p>" + str(video['viewCount']['short']) + "</p>")
        print("<p>" + str(video['publishedTime']) + "</p>")
        print("<p>" + str(video['duration']) + "</p>")
        print("</div>")
        print("</div>")
        print("</a>")
    videosSearch.next()
print("</div>")
print("</body>")
print("</html>")
