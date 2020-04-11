# Python Webscraper tutorial

Link: https://hackernoon.com/building-a-web-scraper-from-start-to-finish-bb6b95388184

## Set Up Virtual Environment
> If we installed these packages globally on our machines, we could face problems if we continued to develop other applications. For example, one program might use the Requests library, version 1, while a later application might use the Requests library, version 2. This could cause a conflict, making either or both applications difficult to run.
To solve this problem, it’s a good idea to set up a virtual environment. These virtual environments are like capsules for the application. This way we could run version 1 of a library in one application and version 2 in another, without conflict, if we created an virtual environment for each application.

### Build the virtual environment.
python3 -m venv tutorial-env

### Activate the virtual environment.
source tutorial-env/bin/activate

### Install Beautiful Soup
pip install bs4

### Install Requests
pip install requests

> let Python know that we’re actually going to use the Libraries that we just installed. We can do this by importing them into our Python file. It might be a good idea to structure our file so that all of our importing is at the top of the file, and then all of our logic comes afterward. Add to top of webscraper.py file:

from bs4 import BeautifulSoup
import requests
