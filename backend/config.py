import json
import os

if not os.path.exists('config.json'):
    print('config.json not found!')
    exit()

fs = open('config.json', 'r')
jsonConfig = json.load(fs)

try:
    dbhost = jsonConfig['dbhost']
    dbuser = jsonConfig['dbuser']
    dbpass = jsonConfig['dbpass']
    fileBase = jsonConfig['fileBase']
except KeyError:
    print('config.json error!')
    exit()
finally :
    fs.close()