# IMPORT
from flask import Flask
from flask import request
from flask_cors import CORS
from summarizer import Summarizer
from newspaper import Article
from spacy.lang.en import English


# APP SETUP
app = Flask(__name__)
# enable resource sharing between frontend and backend
CORS(app)


# ROUTES
@app.route('/', methods=['POST'])
def summarizeText():
    data = request.get_json()
    url = data['url']
    content = data['content']
    ratio = data['ratio']
    ratio = float(ratio)
    model = Summarizer()

    if url == '':
        result = model(content, ratio=ratio)
        return result
    else:
        article = Article(url)
        article.download()
        article.parse()
        result = model(article.text, ratio=ratio)
        return result


if __name__ == "__main__":
    app.run(debug=True)
