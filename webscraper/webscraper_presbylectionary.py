from bs4 import BeautifulSoup
import requests
import json
import datetime

date = datetime.datetime.now()
datestr = date.strftime("%Y") + "/" + date.strftime("%m") + "/" + date.strftime("%d") + "/"
print(datestr)

url = 'https://www.presbyterianmission.org/devotion/daily/' + datestr
response = requests.get(url, timeout=5)
content = BeautifulSoup(response.content, "html.parser")

readingArr = []

for reading in content.findAll('div', attrs={"class": "psalm"}):
    title = reading.find('p', attrs={"class": "kappa"}).text
    titlearr = title.split()
    title = titlearr[1] + "-" + titlearr[0]
    filename = ''.join(title) + ".html"
    filename = ''.join(filename)
    print(filename)
    print(reading, file=open(filename, "w"))

for reading in content.findAll('div', attrs={"class": "reading"}):
    title = reading.find('p', attrs={"class": "kappa"}).text
    titlearr = title.split()
    title = titlearr[1] + "-" + titlearr[0]
    filename = ''.join(title) + ".html"
    filename = ''.join(filename)
    print(filename)
    print(reading, file=open(filename, "w"))
