from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', model_url='https://raw.githubusercontent.com/luojin666/Model-preview-and-quotation-system/master/models/xx.obj')

if __name__ == '__main__':
    app.run()
