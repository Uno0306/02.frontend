from urllib import request
import requests

name = "범죄도시"
request = requests.get("https://www.google.com/search?q="+name+"&source=lnms&tbm=isch")

