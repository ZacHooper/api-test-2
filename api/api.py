import time
from flask import Flask
from random import randint
from api.no_hip_hop_hitlist import create_no_hiphop_hitlist

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/name')
def get_name(): 

    names = ['Zac', 'Chloe', 'Toby', 'Kate', 'Amy', 'Adit', 'Brad', 'Joel']
    random = randint(0, len(names) - 1)

    return {'name': names[random]}

@app.route('/api/playlist')
def create_playlist():
    return create_no_hiphop_hitlist()
