import os
from flask import Flask, render_template,url_for,send_file
template_dir = os.path.abspath("../templates/")

app = Flask(__name__,
template_folder=template_dir)


@app.route("/")
@app.route("/cardexpand")
def home():
  return render_template("index.html")
  
  
app.run(host="0.0.0.0",port=8000,debug=True)