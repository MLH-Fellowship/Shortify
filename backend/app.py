#### IMPORT 
from flask import Flask
from flask_cors import CORS 
from summarizer import Summarizer
from newspaper import Article


#### APP SETUP
app = Flask(__name__)
# enable resource sharing between frontend and backend
CORS(app)


#### ROUTES
@app.route('/<string:text>/<float:ratio>/<path:url>', methods=['POST'])
def summarizeText(text, ratio, url):
    model = Summarizer()
    if url == 'test' or url == '':
        return model(text, ratio=ratio)
    else:
        article = Article(url)
        article.download()
        article.parse()
        return model(article.text)


if __name__ == "__main__":
    app.run(debug=True)

