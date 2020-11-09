from newspaper import Article
from summarizer import Summarizer


model = Summarizer()

article_url = url = 'https://www.nytimes.com/2020/11/08/us/politics/republicans-trump-concede-election.html'
article = Article(url)
article.download()
article.parse()

print(model(article.text))
