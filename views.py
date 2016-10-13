from flask import Flask, render_template, request
from flask import jsonify, url_for, flash
import random
import string
import httplib2
import requests
import sys
import os

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

