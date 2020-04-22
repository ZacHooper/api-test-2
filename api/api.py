import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/name')
def get_name(): 
    return {'name': "Zac"}