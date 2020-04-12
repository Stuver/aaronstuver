from bs4 import BeautifulSoup
import requests
import json

url = 'https://www.presbyterianmission.org/devotion/daily/2020/4/10/'
response = requests.get(url, timeout=5)
content = BeautifulSoup(response.content, "html.parser")

# print (content)
#
# tweet = content.find('p', attrs={"class": "content"}).text
# print (tweet)
#
# for tweet in content.find('p', attrs={"class": "content"}):
#     print (tweet.text.encode('utf-8'))

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
    readingObject = {
    # "time": reading.find('a'),
    # "passage": reading.find('p', attrs={"class": "kappa"}).encode('utf-8'),
    # "text": reading.find('div').encode('utf-8')
    # reading.find('div', attrs={"class": "reading"})
    }
    # passagetime = reading.find('a').encode('utf-8'),
    # ''.join(passagetime),
    # passagetime = passagetime.replace("<a name=\"", '', 1),



    # readingObject = content.findAll('div', attrs={"class": "reading"})
    # print (readingObject, file=open("scriptureData.json", "w"))

#     readingArr.append(readingObject)
# with open('scriptureData.json', 'w') as outfile:
#     json.dump(readingArr, outfile)

#     break
#
# for psalm in content.findAll('div', attrs={"class": "psalm"}):
#     psalmObject = {
#     "time": psalm.find('a'),
#     "passage": psalm.find('p', attrs={"class": "kappa"}),
#     "text": psalm.find('div')
#     }
#     readingArr.append(psalmObject)
#     break


    # print (psalmObject)
